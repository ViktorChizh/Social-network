import { Preloader } from "components/common/preloader/Preloader"
import React, { ComponentType, Suspense } from "react"

export const withSuspense = (Component: ComponentType) => {
	return (
		<Suspense fallback={<Preloader />}>
			<Component />
		</Suspense>
	)
}
