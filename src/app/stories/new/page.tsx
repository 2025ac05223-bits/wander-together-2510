'use client';

import { Button, Input, Card } from '@/components/ui';
import { Upload, X } from 'lucide-react';
import { useState } from 'react';

export default function CreateStoryPage() {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    destination: '',
    travelStyle: [] as string[],
    season: 'spring',
    budget: 'medium',
  });
  const [photos, setPhotos] = useState<string[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleTravelStyle = (style: string) => {
    setFormData((prev) => ({
      ...prev,
      travelStyle: prev.travelStyle.includes(style)
        ? prev.travelStyle.filter((s) => s !== style)
        : [...prev.travelStyle, style],
    }));
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPhotos((prev) => [...prev, event.target?.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removePhoto = (index: number) => {
    setPhotos((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const travelStyles = ['Adventure', 'Relaxation', 'Cultural', 'Budget', 'Luxury', 'Family'];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Share Your Story</h1>

        <Card className="bg-white">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Story Title *
              </label>
              <Input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g., Hidden Gems in Tokyo"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Story Content *
              </label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="Tell your travel story... Share what you discovered, learned, and experienced."
                className="input-field"
                rows={8}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Destination *
                </label>
                <Input
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  placeholder="e.g., Tokyo, Japan"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Season
                </label>
                <select name="season" value={formData.season} onChange={handleChange} className="input-field">
                  <option value="spring">Spring</option>
                  <option value="summer">Summer</option>
                  <option value="fall">Fall</option>
                  <option value="winter">Winter</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Travel Style
              </label>
              <div className="flex flex-wrap gap-2">
                {travelStyles.map((style) => (
                  <button
                    key={style}
                    type="button"
                    onClick={() => toggleTravelStyle(style)}
                    className={`px-3 py-2 rounded-full border-2 transition ${
                      formData.travelStyle.includes(style)
                        ? 'border-primary-500 bg-primary-50 text-primary-600'
                        : 'border-gray-300 text-gray-700 hover:border-primary-500'
                    }`}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>

            {/* Photo Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Add Photos
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600 mb-2">Drag and drop your photos here, or</p>
                <label className="text-primary-600 hover:underline cursor-pointer">
                  browse files
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                </label>
              </div>

              {photos.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  {photos.map((photo, index) => (
                    <div key={index} className="relative">
                      <img
                        src={photo}
                        alt={`Upload ${index}`}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => removePhoto(index)}
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex gap-4 justify-end pt-6 border-t border-gray-200">
              <Button variant="secondary">Save Draft</Button>
              <Button type="submit">Publish Story</Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
