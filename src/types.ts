export type Category = 
  | 'all'
  | 'familia'
  | 'gestante'
  | 'bebe'
  | 'batizado'
  | 'retrato'
  | 'albuns';

export interface PortfolioItem {
  id: string;
  title: string;
  category: Category;
  categoryLabel: string;
  image: string;
  aspectRatio?: 'portrait' | 'landscape' | 'square';
  year: string;
  location: string;
  lighting: string;
  story: string;
  exif: {
    camera: string;
    lens: string;
    aperture: string;
    iso: string;
    speed: string;
    recommendedPaper: string;
  };
}

export interface CollectionPackage {
  id: string;
  name: string;
  subtitle: string;
  tag?: string;
  price: number;
  duration: string;
  deliveredPhotos: string;
  albumIncluded: boolean;
  albumDescription?: string;
  features: string[];
  idealFor: string;
  recommendedCover: string;
}

export interface AddonOption {
  id: string;
  name: string;
  description: string;
  price: number;
  iconName: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  sessionType: string;
  year: string;
  city: string;
}

export interface BookingFormData {
  sessionType: string;
  locationPreference: string;
  preferredDate: string;
  preferredTimeSlot: string;
  fullName: string;
  whatsapp: string;
  email: string;
  familyMembers: string;
  specialWishes: string;
  selectedCollectionId?: string;
  selectedAddonIds?: string[];
}
