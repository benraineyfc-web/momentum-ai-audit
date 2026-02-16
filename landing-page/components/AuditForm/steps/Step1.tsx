interface Step1Props {
  register: any;
  errors: any;
  onNext: () => void;
}

export default function Step1({ register, errors, onNext }: Step1Props) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-neutral-900 mb-6">
        Let's start with your business
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            What type of business do you run?
          </label>
          <input
            {...register('businessType')}
            type="text"
            placeholder="e.g., Plumbing, Care Home, Salon"
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          {errors.businessType && (
            <p className="text-error text-sm mt-1">{errors.businessType.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            Your name
          </label>
          <input
            {...register('name')}
            type="text"
            placeholder="John Smith"
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          {errors.name && (
            <p className="text-error text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            Email address
          </label>
          <input
            {...register('email')}
            type="email"
            placeholder="john@business.co.uk"
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          {errors.email && (
            <p className="text-error text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            Phone number (optional)
          </label>
          <input
            {...register('phone')}
            type="tel"
            placeholder="07XXX XXXXXX"
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </div>

      <button
        type="button"
        onClick={onNext}
        className="mt-8 w-full bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
      >
        Next Step
      </button>
    </div>
  );
}
