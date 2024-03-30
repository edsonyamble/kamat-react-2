import React from 'react'
import Post from './poost/post'
import datapost from '../../filejson/datapost.json'
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
				<Post message='hi,how are you?' like='2' />
				{datapost.map(item => (
					<div key={item.id}>
						<h1>{item.like}</h1>
					</div>
				))}
				<Post message="It 's Edson" like='20' />
			</div>
		</div>
	)
}
export default Mypost
