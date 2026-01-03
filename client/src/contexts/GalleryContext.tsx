import React, { createContext, useContext, useState } from "react";

export interface GalleryImage {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  uploadedAt: Date;
}

interface GalleryContextType {
  images: GalleryImage[];
  addImage: (image: Omit<GalleryImage, "id" | "uploadedAt">) => void;
  deleteImage: (id: string) => void;
  updateImage: (id: string, image: Partial<GalleryImage>) => void;
}

const GalleryContext = createContext<GalleryContextType | undefined>(undefined);

const defaultImages: GalleryImage[] = [];

export function GalleryProvider({ children }: { children: React.ReactNode }) {
  const [images, setImages] = useState<GalleryImage[]>(defaultImages);

  const addImage = (image: Omit<GalleryImage, "id" | "uploadedAt">) => {
    const newImage: GalleryImage = {
      ...image,
      id: `img-${Date.now()}`,
      uploadedAt: new Date(),
    };
    setImages([newImage, ...images]);
  };

  const deleteImage = (id: string) => {
    setImages(images.filter((img) => img.id !== id));
  };

  const updateImage = (id: string, updates: Partial<GalleryImage>) => {
    setImages(
      images.map((img) => (img.id === id ? { ...img, ...updates } : img))
    );
  };

  return (
    <GalleryContext.Provider value={{ images, addImage, deleteImage, updateImage }}>
      {children}
    </GalleryContext.Provider>
  );
}

export function useGallery() {
  const context = useContext(GalleryContext);
  if (!context) {
    throw new Error("useGallery must be used within GalleryProvider");
  }
  return context;
}
