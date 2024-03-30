import React from 'react'
import Pro from './post.module.css'
function Post(props) {
	return (
		<div>
			<div className='post'>
				<div className={Pro.item}>
					<img
						src='https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yX3Bob3RvX29mX2FfbGlvbl9pc29sYXRlZF9vbl9jb2xvcl9iYWNrZ3JvdW5kXzJhNzgwMjM1LWRlYTgtNDMyOS04OWVjLTY3ZWMwNjcxZDhiMV8xLmpwZw.jpg'
						alt='lion'
					/>
					{props.message}
				</div>
			</div>
		</div>
	)
}
export default Post
