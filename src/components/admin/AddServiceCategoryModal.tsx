
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { CATEGORY_IMAGES } from "@/data/servicesCategoriesData";
import { Upload } from 'lucide-react';

const colorOptions = [
  { name: 'Blue', value: 'bg-blue-500' },
  { name: 'Green', value: 'bg-green-500' },
  { name: 'Purple', value: 'bg-purple-500' },
  { name: 'Pink', value: 'bg-pink-500' },
  { name: 'Indigo', value: 'bg-indigo-500' },
  { name: 'Red', value: 'bg-red-500' },
  { name: 'Yellow', value: 'bg-yellow-500' },
  { name: 'Teal', value: 'bg-teal-500' },
];

const presetImages = Object.values(CATEGORY_IMAGES);
// Placeholder image in case of missing/broken category image
const PLACEHOLDER_IMAGE = "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=120&h=120&fit=crop&auto=format";

interface AddServiceCategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (categoryData: { name: string; color: string; image: string }) => void;
}

export function AddServiceCategoryModal({ isOpen, onClose, onAdd }: AddServiceCategoryModalProps) {
  const [name, setName] = useState('');
  const [selectedColor, setSelectedColor] = useState(colorOptions[0].value);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [isUploading, setIsUploading] = useState(false);

  // Helper: always show this image (preset/uploaded/else placeholder)
  const getCurrentImage = () => {
    if (selectedImage && selectedImage !== '') return selectedImage;
    return PLACEHOLDER_IMAGE;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validImage = selectedImage && selectedImage !== '' ? selectedImage : PLACEHOLDER_IMAGE;
    if (name.trim()) {
      onAdd({ name: name.trim(), color: selectedColor, image: validImage });
      setName('');
      setSelectedColor(colorOptions[0].value);
      setSelectedImage('');
      onClose();
    }
  };

  const handleClose = () => {
    setName('');
    setSelectedColor(colorOptions[0].value);
    setSelectedImage('');
    onClose();
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsUploading(true);
    const file = e.target.files?.[0];
    if (!file) { setIsUploading(false); return; }
    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await fetch('/api/lovable-upload', { method: 'POST', body: formData });
      if (res.ok) {
        const { url } = await res.json();
        setSelectedImage(url);
      } else {
        alert('Failed to upload image');
      }
    } catch (e) {
      alert('An error occurred while uploading');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add Service Category</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="categoryName">Category Name</Label>
            <Input
              id="categoryName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter category name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Category Color</Label>
            <div className="grid grid-cols-4 gap-2">
              {colorOptions.map((color) => (
                <button
                  key={color.value}
                  type="button"
                  onClick={() => setSelectedColor(color.value)}
                  className={`
                    w-full h-10 rounded-md border-2 transition-all
                    ${color.value}
                    ${selectedColor === color.value ? 'border-gray-900 scale-105' : 'border-gray-300'}
                  `}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Category Image</Label>
            <div className="flex flex-wrap gap-3 mb-2">
              {/* Show preset images */}
              {presetImages.map(img => (
                <button
                  key={img}
                  type="button"
                  className={`w-14 h-14 rounded border-2
                    ${selectedImage === img ? 'border-blue-500 ring-2 ring-blue-500' : 'border-gray-200'}
                    overflow-hidden bg-gray-100 p-0`}
                  style={{ outline: "none" }}
                  onClick={() => setSelectedImage(img)}
                  title="Preset Image"
                >
                  <img src={img} alt="" className="object-cover w-full h-full" />
                </button>
              ))}
              {/* Uploaded image preview OR Fallback placeholder */}
              {!selectedImage && (
                <div className="w-14 h-14 rounded border-2 border-gray-200 overflow-hidden bg-gray-100 p-0 flex items-center justify-center relative group">
                  <img src={PLACEHOLDER_IMAGE} alt="Placeholder" className="object-cover w-full h-full" />
                  <span className="absolute bottom-0 left-0 right-0 text-[10px] text-gray-600 bg-white/80 px-1 py-[1px] rounded-b-md">Placeholder</span>
                </div>
              )}
              {selectedImage && !presetImages.includes(selectedImage) && (
                <div className="w-14 h-14 rounded border-2 border-blue-500 ring-2 ring-blue-500 overflow-hidden bg-gray-100 p-0 flex items-center justify-center relative group">
                  <img src={selectedImage} alt="" className="object-cover w-full h-full" />
                  <span className="absolute bottom-0 left-0 right-0 text-[10px] text-white bg-blue-500 bg-opacity-60 px-1 py-[1px] rounded-b-md">Uploaded</span>
                </div>
              )}
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="add-category-image-upload">
                <Button variant="outline" size="sm" asChild>
                  <span>
                    <Upload className="inline w-4 h-4 mr-1" />
                    Upload
                  </span>
                </Button>
              </label>
              <input
                type="file"
                id="add-category-image-upload"
                hidden
                accept="image/*"
                onChange={handleImageUpload}
                disabled={isUploading}
              />
              {isUploading && <span className="text-xs text-muted">Uploading...</span>}
            </div>
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={isUploading}>Add Category</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

