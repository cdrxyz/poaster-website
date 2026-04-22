import { clsx } from 'clsx'
import { assetUrl } from '@/lib/asset'

export function LogoCloud({ className }) {
  return (
    <div
      className={clsx(
        className,
        'flex justify-between max-sm:mx-auto max-sm:max-w-md max-sm:flex-wrap max-sm:justify-evenly max-sm:gap-x-4 max-sm:gap-y-4',
      )}
    >
      <img
        alt="SavvyCal"
        src={assetUrl('/logo-cloud/savvycal.svg')}
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      />
      <img
        alt="Laravel"
        src={assetUrl('/logo-cloud/laravel.svg')}
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      />
      <img
        alt="Tuple"
        src={assetUrl('/logo-cloud/tuple.svg')}
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      />
      <img
        alt="Transistor"
        src={assetUrl('/logo-cloud/transistor.svg')}
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      />
      <img
        alt="Statamic"
        src={assetUrl('/logo-cloud/statamic.svg')}
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      />
    </div>
  )
}
