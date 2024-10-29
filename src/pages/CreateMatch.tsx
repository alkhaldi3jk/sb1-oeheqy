import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const createMatchSchema = z.object({
  fieldId: z.string().min(1, 'Please select a field'),
  date: z.string().min(1, 'Please select a date'),
  time: z.string().min(1, 'Please select a time'),
  maxPlayers: z.number().min(2).max(22),
  isPrivate: z.boolean(),
});

type CreateMatchForm = z.infer<typeof createMatchSchema>;

const SAMPLE_FIELDS = [
  { id: '1', name: 'Green Valley Soccer Complex' },
  { id: '2', name: 'Urban Football Arena' },
];

export default function CreateMatch() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateMatchForm>({
    resolver: zodResolver(createMatchSchema),
    defaultValues: {
      maxPlayers: 10,
      isPrivate: false,
    },
  });

  const onSubmit = async (data: CreateMatchForm) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success('Match created successfully!');
      navigate('/matches');
    } catch (error) {
      toast.error('Failed to create match');
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Create New Match</h1>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Field
          </label>
          <select
            {...register('fieldId')}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          >
            <option value="">Select a field</option>
            {SAMPLE_FIELDS.map((field) => (
              <option key={field.id} value={field.id}>
                {field.name}
              </option>
            ))}
          </select>
          {errors.fieldId && (
            <p className="mt-1 text-sm text-red-600">{errors.fieldId.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date
            </label>
            <input
              type="date"
              {...register('date')}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
            {errors.date && (
              <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Time
            </label>
            <input
              type="time"
              {...register('time')}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
            {errors.time && (
              <p className="mt-1 text-sm text-red-600">{errors.time.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Maximum Players
          </label>
          <input
            type="number"
            {...register('maxPlayers', { valueAsNumber: true })}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
          {errors.maxPlayers && (
            <p className="mt-1 text-sm text-red-600">
              {errors.maxPlayers.message}
            </p>
          )}
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            {...register('isPrivate')}
            className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
          />
          <label className="ml-2 block text-sm text-gray-700">
            Make this match private
          </label>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Creating...' : 'Create Match'}
          </button>
        </div>
      </form>
    </div>
  );
}