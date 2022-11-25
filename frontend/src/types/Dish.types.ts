export interface DishProps {
    id: number;
    name: string;
    description: string;
    rating: number;
    price?: number;
    availableSeatsForTwo?: number;
    estimatedPrepTime?: number;
    src: string;
} 