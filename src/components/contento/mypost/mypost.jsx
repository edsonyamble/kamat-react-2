import React from 'react'
import Post from './poost/post'
function Mypost() {
	return (
		<div>
			<div>
				my posts
				<div>
					<textarea></textarea>
					<button>Add Posts</button>
				</div>
			</div>
			<div className='post'>
				<Post message='hi,how are you?' />
				<Post message="It 's Edson" />
			</div>
		</div>
	)
}
export default Mypost
