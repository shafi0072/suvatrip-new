import { Button } from '@mui/material';
import React from 'react';
import {
	FacebookAuthProvider,
	GoogleAuthProvider,
	signInWithPopup,
	sendSignInLinkToEmail,
	OAuthProvider 
} from 'firebase/auth';
import auth from '@/src/config/firebase';
import { baseUrl } from '@/src/config/serverConfig';

const index = () => {
	const provider = new GoogleAuthProvider();
	const facebookProvider = new FacebookAuthProvider();
	const Appleprovider = new OAuthProvider('apple.com');


	const signInWithApple = () => {
		signInWithPopup(auth, Appleprovider)
		.then((result) => {
			// The signed-in user info.
			const user = result.user;
	
			// Apple credential
			const credential = OAuthProvider.credentialFromResult(result);
			const accessToken = credential.accessToken;
			const idToken = credential.idToken;
	
			// IdP data available using getAdditionalUserInfo(result)
			// ...
		})
		.catch((error) => {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			// The email of the user's account used.
			const email = error.customData.email;
			// The credential that was used.
			const credential = OAuthProvider.credentialFromError(error);
	
			// ...
		});
	};

	const signInWithFacebook = () => {
		signInWithPopup(auth, facebookProvider)
			.then((result) => {
				console.log({ user: result.user });
			})
			.catch((err) => console.log(err));
	};

	const signInWithGoogle = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				console.log({ user: result.user })
				debugger

				fetch(`${baseUrl}/auth/sign-up`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						fullName:	result?.user?.name,
						email:result?.user?.email,
						phone: result?.user?.email,
					}),
				})
					.then((res) => res.json())
					.then((data) => {
						if (data?.message === 'added') {
							console.log('signed-up success');
							debugger
						} else {
							console.log(false);
							debugger
							console.log(false);
							debugger
						}
					})
					.catch((err) => {console.log({err}); debugger});
			})
			.catch((err) => console.log(err));
	};

	const actionCodeSettings = {
		// URL you want to redirect back to. The domain (www.example.com) for this
		// URL must be in the authorized domains list in the Firebase Console.
		url: 'http://localhost:3000/verify-email',
		// This must be true.
		handleCodeInApp: true,
		iOS: {
			bundleId: 'com.example.ios'
		},
		android: {
			packageName: 'com.example.android',
			installApp: true,
			minimumVersion: '12'
		},
		dynamicLinkDomain: 'example.page.link'
	};
	
	const handleSignIn = () => {
    const actionCodeSettings = {
      // URL you want to redirect back to after email verification
      url: 'http://localhost:3000/verify-email',
      handleCodeInApp: true,
    };

    // Prompt the user to sign in via email link
    const email = 'user@example.com'; // Replace with the user's email
    sendSignInLinkToEmail(auth, 'safi29317@gmail.com', actionCodeSettings)
      .then(() => {
        // Save the email locally to be used on redirect
        window.localStorage.setItem('emailForSignIn', email);
        console.log('Sign-in email sent successfully');
      })
      .catch((error) => {
        console.error('Error sending sign-in email:', error);
      });
  };
	return (
		<div className="d-flex justify-content-center">
			<div className="flex  ">
			<Button
				style={{
					
					marginBottom: '5px',
					padding: '10px',
				}}
				className='rounded-full w-14'
				variant="contained"
				onClick={signInWithGoogle}
			>
				<img src="https://cdn-icons-png.flaticon.com/512/720/720255.png" alt="" />
			</Button>
			
			<Button
				style={{
					
					marginBottom: '5px',
					padding: '10px',
				}}
				className='rounded-full w-14 ml-3'
				variant="contained"
				onClick={signInWithFacebook}
			>
				<img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/2048px-Facebook_f_logo_%282021%29.svg.png" alt="" />
			</Button>
			<Button
				style={{
					
					marginBottom: '5px',
					padding: '10px',
				}}
				className='rounded-full w-14 ml-3'
				variant="contained"
				onClick={signInWithApple}
			>
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/488px-Apple_logo_black.svg.png?20220821121934"  alt="" />
			</Button>
		</div>
		</div>
	);
};

export default index;