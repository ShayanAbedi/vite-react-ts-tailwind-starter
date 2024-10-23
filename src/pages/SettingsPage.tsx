import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const settingsSchema = z.object({
  siteName: z.string().min(1, 'Site name is required'),
  email: z.string().email('Invalid email address'),
  notifications: z.boolean(),
})

type SettingsForm = z.infer<typeof settingsSchema>

const SettingsPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SettingsForm>({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      siteName: '',
      email: '',
      notifications: false,
    },
  })

  const onSubmit = (data: SettingsForm) => {
    console.log(data)
    // Handle form submission
  }

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Settings</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Site Name
          </label>
          <input
            type="text"
            {...register('siteName')}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
          />
          {errors.siteName && (
            <p className="mt-1 text-sm text-red-600">
              {errors.siteName.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            {...register('email')}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              {...register('notifications')}
              className="rounded border-gray-300"
            />
            <span className="ml-2 text-sm">Enable notifications</span>
          </label>
        </div>

        <button
          type="submit"
          className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Save Settings
        </button>
      </form>
    </div>
  )
}

export default SettingsPage
