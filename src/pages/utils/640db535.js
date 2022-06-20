import posthog from 'posthog-js'
import React from 'react'
import Seo from '../../components/Seo'

function AnalyticsMarkOwnDevicePage() {
  function handleMarkOwnDevice() {
    document.cookie = 'is_own_device=true;path=/'
    posthog.capture('is_own_device', { $set: { 'Is Own Device': true } })
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      <Seo
        meta={[
          {
            name: 'robots',
            content: 'noindex',
          },
        ]}
      />
      <button onClick={handleMarkOwnDevice}>Mark As Own Device</button>
    </div>
  )
}

export default AnalyticsMarkOwnDevicePage
