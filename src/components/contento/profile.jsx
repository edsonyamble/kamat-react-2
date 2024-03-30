import React from 'react'
import Pro from './profile.module.css'
import Mypost from './mypost/mypost'
function Profile() {
	return (
		<div className={Pro.content}>
			<div>
				<img
					src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
					alt='flower'
				/>
			</div>
			<div>ava+ description</div>
			<Mypost />
		</div>
	)
}
export default Profile
