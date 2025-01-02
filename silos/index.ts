// Constants
const SILO_MAX: number = 100;
const CRITICAL_FILL: number = 80;
const INITIAL_FILL: number[] = [75, 25, 90, 50];

// Visual constants
const SILO_WIDTH: number = 80;
const SILO_HEIGHT: number = 200;
const BUTTON_SIZE: number = 30;
const SPACING: number = 40;
const MARGIN: number = 50;

// Types
interface Point {
  x: number;
  y: number;
}

interface ButtonProps {
  position: Point;
  isAdd: boolean;
  onClick: () => void;
  isHovered: boolean;
}

interface SiloProps {
  fillLevel: number;
  position: Point;
  onAdd: () => void;
  onRemove: () => void;
  hoveredButton: string | null;
  index: number;
  setHoveredButton: (id: string | null) => void;
}

class Silo {
  private fillLevel: number;

  constructor(initialFill: number) {
    this.fillLevel = Math.min(Math.max(initialFill, 0), SILO_MAX);
  }

  public getFillLevel(): number {
    return this.fillLevel;
  }

  public add(): void {
    if (this.fillLevel < SILO_MAX) {
      this.fillLevel++;
    }
  }

  public remove(): void {
    if (this.fillLevel > 0) {
      this.fillLevel--;
    }
  }

  public isCritical(): boolean {
    return this.fillLevel >= CRITICAL_FILL;
  }
}

class SiloVisualization {
  private silos: Silo[];
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private hoveredButton: string | null = null;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const context = canvas.getContext('2d');
    if (!context) throw new Error('Could not get canvas context');
    this.ctx = context;
    
    // Initialize silos
    this.silos = INITIAL_FILL.map(fill => new Silo(fill));
    
    // Setup canvas size
    this.setupCanvas();
    
    // Add event listeners
    this.setupEventListeners();
    
    // Initial draw
    this.draw();
  }

  private setupCanvas(): void {
    const totalWidth = (SILO_WIDTH + SPACING) * this.silos.length + MARGIN * 2;
    const totalHeight = SILO_HEIGHT + MARGIN * 3;
    this.canvas.width = totalWidth;
    this.canvas.height = totalHeight;
  }

  private setupEventListeners(): void {
    this.canvas.addEventListener('click', this.handleClick.bind(this));
    this.canvas.addEventListener('mousemove', this.handleMouseMove.bind(this));
    this.canvas.addEventListener('mouseout', () => {
      this.hoveredButton = null;
      this.draw();
    });
  }

  private getButtonBounds(index: number, isAdd: boolean): DOMRect {
    const x = MARGIN + (SILO_WIDTH + SPACING) * index;
    const buttonX = isAdd ? x : x + BUTTON_SIZE + 10;
    return new DOMRect(buttonX, MARGIN, BUTTON_SIZE, BUTTON_SIZE);
  }

  private isPointInButton(point: Point, buttonBounds: DOMRect): boolean {
    return point.x >= buttonBounds.x && 
           point.x <= buttonBounds.x + buttonBounds.width &&
           point.y >= buttonBounds.y && 
           point.y <= buttonBounds.y + buttonBounds.height;
  }

  private handleClick(event: MouseEvent): void {
    const rect = this.canvas.getBoundingClientRect();
    const point: Point = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };

    this.silos.forEach((silo, index) => {
      const addButtonBounds = this.getButtonBounds(index, true);
      const removeButtonBounds = this.getButtonBounds(index, false);

      if (this.isPointInButton(point, addButtonBounds)) {
        silo.add();
        this.draw();
      } else if (this.isPointInButton(point, removeButtonBounds)) {
        silo.remove();
        this.draw();
      }
    });
  }

  private handleMouseMove(event: MouseEvent): void {
    const rect = this.canvas.getBoundingClientRect();
    const point: Point = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };

    let newHoveredButton: string | null = null;

    this.silos.forEach((_, index) => {
      const addButtonBounds = this.getButtonBounds(index, true);
      const removeButtonBounds = this.getButtonBounds(index, false);

      if (this.isPointInButton(point, addButtonBounds)) {
        newHoveredButton = `add-${index}`;
      } else if (this.isPointInButton(point, removeButtonBounds)) {
        newHoveredButton = `remove-${index}`;
      }
    });

    if (this.hoveredButton !== newHoveredButton) {
      this.hoveredButton = newHoveredButton;
      this.draw();
    }
  }

  private drawButton(position: Point, isAdd: boolean, isHovered: boolean): void {
    const { x, y } = position;
    
    // Draw button rectangle
    this.ctx.fillStyle = 'white';
    this.ctx.strokeStyle = 'black';
    this.ctx.lineWidth = 1;
    this.ctx.beginPath();
    this.ctx.rect(x, y, BUTTON_SIZE, BUTTON_SIZE);
    this.ctx.fill();
    this.ctx.stroke();

    // Draw triangle indicator
    this.ctx.fillStyle = isHovered ? '#4dabf7' : 'black';
    this.ctx.beginPath();
    if (isAdd) {
      this.ctx.moveTo(x + 5, y + BUTTON_SIZE/2);
      this.ctx.lineTo(x + BUTTON_SIZE - 5, y + BUTTON_SIZE/2);
      this.ctx.lineTo(x + BUTTON_SIZE/2, y + 5);
    } else {
      this.ctx.moveTo(x + 5, y + 5);
      this.ctx.lineTo(x + BUTTON_SIZE - 5, y + BUTTON_SIZE/2);
      this.ctx.lineTo(x + 5, y + BUTTON_SIZE - 5);
    }
    this.ctx.closePath();
    this.ctx.fill();
  }

  private drawSilo(silo: Silo, index: number): void {
    const x = MARGIN + (SILO_WIDTH + SPACING) * index;
    const y = MARGIN + BUTTON_SIZE * 2;
    
    // Draw silo container
    this.ctx.strokeStyle = 'black';
    this.ctx.lineWidth = 2;
    this.ctx.strokeRect(x, y, SILO_WIDTH, SILO_HEIGHT);

    // Draw fill level
    const fillHeight = (silo.getFillLevel() / SILO_MAX) * SILO_HEIGHT;
    this.ctx.fillStyle = silo.isCritical() ? '#ff6b6b' : '#69db7c';
    this.ctx.fillRect(
      x,
      y + (SILO_HEIGHT - fillHeight),
      SILO_WIDTH,
      fillHeight
    );

    // Draw fill level text
    this.ctx.fillStyle = 'black';
    this.ctx.font = '14px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(
      silo.getFillLevel().toString(),
      x + SILO_WIDTH / 2,
      y + SILO_HEIGHT + 25
    );

    // Draw buttons
    this.drawButton(
      { x, y: MARGIN },
      true,
      this.hoveredButton === `add-${index}`
    );
    this.drawButton(
      { x: x + BUTTON_SIZE + 10, y: MARGIN },
      false,
      this.hoveredButton === `remove-${index}`
    );
  }

  public draw(): void {
    // Clear canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Draw all silos
    this.silos.forEach((silo, index) => {
      this.drawSilo(silo, index);
    });
  }
}

export default SiloVisualization;