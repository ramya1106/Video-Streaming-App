# Video Streaming App  

Modern video streaming app built with **React.js**, **JWT authentication**, **API integration**, **themes**, and **protected routes**.  
Inspired by YouTube, the app provides a fully responsive UI, secure login, dynamic video sections, and saved videos.  

---

## Features  

### Authentication & Authorization  
- Login with JWT token stored in cookies.  
- Protected routes: only authenticated users can access Home, Trending, Gaming, Saved Videos, and Video Details.  
- Redirects unauthenticated users to Login.  
- Prevents logged-in users from visiting Login again.  
- Password visibility toggle.
- (Demo Credentials — username: rahul | password: rahul@2021)

### Home Route  
- Fetch videos from `homeVideosApiUrl`.  
- Loader while fetching.  
- Success, Failure, and Empty (No Videos) views.  
- Search videos with query parameter.  
- Retry on failure.  
- Navigation via sidebar links or clicking logo.  

### Trending Route  
- Fetch trending videos from `trendingVideosApiUrl`.  
- Loader, Success, and Failure states.  
- Retry option.  

### Gaming Route  
- Fetch gaming videos from `gamingVideosApiUrl`.  
- Loader, Success, and Failure states.  
- Retry option.  

### Video Item Details  
- Fetch video details from `videoItemDetailsApiUrl`.  
- Video playback with `react-player`.  
- Like / Dislike toggle (mutually exclusive).  
- Save / Unsave functionality with persisted Saved Videos list.  

### Saved Videos Route  
- View all saved videos.  
- Empty state when no videos are saved.  

### Not Found Route  
- Invalid URL → navigates to Not Found view.  

### Theming  
- Light & Dark themes toggleable from header.  

### Logout  
- Logout popup confirmation.  
- Cancel → close popup, remain on page.  
- Confirm → logout and navigate to Login route.  

---

## API Endpoints  

- **Login:** `POST https://apis.ccbp.in/login`  
  - Returns `jwt_token` on success  
- **Home Videos:** `GET https://apis.ccbp.in/videos/all?search=`  
- **Trending Videos:** `GET https://apis.ccbp.in/videos/trending`  
- **Gaming Videos:** `GET https://apis.ccbp.in/videos/gaming`  
- **Video Details:** `GET https://apis.ccbp.in/videos/:id`  

All requests require `jwt_token` (for authenticated routes).  

---

## Tech Stack  

- **React.js** (functional components + hooks)  
- **React Router DOM** (protected routes)  
- **styled-components** (theming & responsive design)  
- **React Context API** (theme management)  
- **react-icons** (UI icons)  
- **react-player** (video playback)  
- **JWT & Cookies** for authentication  
- **API integration** with loaders and error states  

---

## Project Structure  

public/  
src/  
┣ ProtectedRoute/  
┣ components/  
┃ ┣ Gaming/  
┃ ┣ Header/  
┃ ┣ Home/  
┃ ┣ Login/  
┃ ┣ NotFound/  
┃ ┣ SavedVideos/  
┃ ┣ SidePanel/  
┃ ┣ Trending/  
┃ ┣ VideoItemDetails/  
┃ ┗ common components...  
┣ context/  
┃ ┗ ThemeContext.js  
┣ App.js  
┣ App.css  
┣ index.js  
┗ setupTests.js  

---

## Setup Instructions

Follow these steps to set up the project locally:

Clone the repository:

``` 
git clone https://github.com/your-username/video-streaming-app.git
cd video-streaming-app 

``` 
Install dependencies:

    npm install

Start the development server
    
    npm start

---

### Design Files

<details>
<summary>Login Route</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px) - Login](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-login-sm-outputs.png)
- [Extra Small (Size < 576px) and Small (Size >= 576px) - Login Failure - Light Theme](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-login-failure-sm-outputs.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Login - Light Theme](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-login-light-theme-lg-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Login - Dark Theme](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-login-dark-theme-lg-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Login Failure - Light Theme](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-login-failure-light-theme-lg-output-v0.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Login Failure - Dark Theme](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-login-failure-dark-theme-lg-output-v1.png)

</details>

<details>
<summary>Home Route</summary>

- [Extra Small (Size < 576px) - Home](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-home-success-xs-outputs.png)
- [Small (Size >= 576px) - Home - Light Theme](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-home-success-light-theme-sm-output.png)
- [Small (Size >= 576px) - Home - Dark Theme](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-home-success-dark-theme-sm-output.png)
- [Extra Small (Size < 576px) and Small (Size >= 576px) - Home - No Search Results](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-home-no-videos-sm-outputs.png)
- [Extra Small (Size < 576px) and Small (Size >= 576px) - Home Failure](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-home-failure-sm-outputs.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Home - Light Theme](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-home-success-light-theme-lg-output-v0.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Home - Dark Theme](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-home-success-dark-theme-lg-output-v0.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Home - No search results - Light Theme](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-home-no-videos-light-theme-lg-output-v0.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Home - No search results - Dark Theme](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-home-no-videos-dark-theme-lg-output-v0.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Home Failure - Light Theme](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-home-failure-light-theme-lg-output-v0.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Home Failure - Dark Theme](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-home-failure-dark-theme-lg-output-v0.png)

</details>

<details>
<summary>Trending Route</summary>

- [Extra Small (Size < 576px) - Trending](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-trending-success-xs-outputs.png)
- [Small (Size >= 576px) - Trending - Light Theme](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-trending-success-light-theme-sm-output.png)
- [Small (Size >= 576px) - Trending - Dark Theme](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-trending-success-dark-theme-sm-output.png)
- [Extra Small (Size < 576px) and Small (Size >= 576px) - Trending Failure](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-trending-failure-sm-outputs.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Trending - Light Theme](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-trending-success-light-theme-lg-output-v0.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Trending - Dark Theme](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-trending-success-dark-theme-lg-output-v0.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Trending Failure - Light Theme](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-trending-failure-light-theme-lg-output-v0.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Trending Failure - Dark Theme](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-trending-failure-dark-theme-lg-output-v0.png)

</details>

<details>
<summary>Gaming Route</summary>

- [Extra Small (Size < 576px) - Gaming](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-gaming-success-xs-outputs.png)
- [Small (Size >= 576px) - Gaming - Light Theme](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-gaming-success-light-theme-sm-output.png)
- [Small (Size >= 576px) - Gaming - Dark Theme](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-gaming-success-dark-theme-sm-output.png)
- [Extra Small (Size < 576px) and Small (Size >= 576px) - Gaming Failure](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-gaming-failure-sm-outputs.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Gaming - Light Theme](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-gaming-success-light-theme-lg-output-v0.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Gaming - Dark Theme](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-gaming-success-dark-theme-lg-output-v0.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Gaming Failure - Light Theme](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-gaming-failure-light-theme-lg-output-v0.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Gaming Failure - Dark Theme](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-gaming-failure-dark-theme-lg-output-v0.png)

</details>

<details>
<summary>Video Item Details Route</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px) - Video Item Details](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-video-item-details-success-sm-outputs.png)
- [Extra Small (Size < 576px) and Small (Size >= 576px) - Video Item Details Failure](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-video-item-details-failure-sm-outputs.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Video Item Details - Light Theme](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-video-item-details-success-light-theme-lg-output-v0.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Video Item Details - Dark Theme](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-video-item-details-success-dark-theme-lg-output-v0.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Video Item Details Failure - Light Theme](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-video-item-details-failure-light-theme-lg-output-v0.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Video Item Details Failure - Dark Theme](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-video-item-details-failure-dark-theme-lg-output-v0.png)

</details>

<details>
<summary>Saved Videos Route</summary>

- [Extra Small (Size < 576px) - No Saved Videos](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-no-saved-videos-sm-outputs.png)
- [Small (Size >= 576px) - Saved Videos - Light Theme](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-saved-videos-light-theme-sm-output-v0.png)
- [Small (Size >= 576px) - Saved Videos - Dark Theme](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-saved-videos-dark-theme-sm-output-v0.png)
- [Extra Small (Size < 576px) - Saved Videos](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-saved-videos-xs-outputs.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - No Saved Videos - Light Theme](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-no-saved-videos-light-theme-lg-output-v0.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - No Saved Videos - Dark Theme](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-no-saved-videos-dark-theme-lg-output-v0.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Saved Videos - Light Theme](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-saved-videos-light-theme-lg-output-v0.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Saved Videos - Dark Theme](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-saved-videos-dark-theme-lg-output-v0.png)

</details>

<details>
<summary>Popup Design Files</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px) - Logout](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-logout-popup-sm-outputs.png)
- [Extra Small (Size < 576px) and Small (Size >= 576px) - Menu](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-menu-popup-sm-outputs.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Logout - Light Theme](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-logout-popup-light-theme-lg-output-v0.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Logout - Dark Theme](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-logout-popup-dark-theme-lg-output-v0.png)

</details>

<details>
<summary>Not Found Route</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px) - Not Found](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-page-not-found-sm-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Not Found](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-page-not-found-light-theme-lg-output-v0.png)

</details>

---
Got suggestions? Let’s connect and build together!  
