## 🧭 Expo Router 101: A Complete Guide to Bottom Tabs, Top Tabs, and Full-Page Navigation

This repository contains the example used in my blog. To understand it better, have a read <a href="https://medium.com/technogise/expo-router-101-a-complete-guide-to-bottom-tabs-top-tabs-and-full-page-navigation-0e9f3673cd34" target="_blank">here.</a>

### Quick start

#### Step 1: Clone the application
```
git clone https://github.com/navsheelbiral/expo-router-bottom-top-full-page-navigation.git [HTTPS]
git clone git@github.com:navsheelbiral/expo-router-bottom-top-full-page-navigation.git [SSH]
```

#### Step 2: Install dependencies
```
npm install
```

#### Step 3: Spin up the application
```
npm run start
```

- Press ```i``` to choose to run it in an **iOS** simulator
- Press ```a``` to choose to run it in an **Android** simulator

### Folder Structure
```
app/
|– (bottom-tabs)/
|   |– _layout.tsx       ← Bottom tabs layout
|   |– home              ← Home tab pages
        |- _layout.tsx   ← Top tabs layout
        |- following.tsx
        |- forYou.tsx
    |- messages          ← Messages tab pages
        |- _layout.tsx   ← Top tabs layout
        |- direct.tsx
        |- group.tsx
        |- starred.tsx
|– _layout.tsx           ← Root layout
|- fullScreenRoute.tsx   ← Full screen details page    
```

### Raise an issue
Feel free to raise a GitHub Issue if you find something that is breaking, I will be happy to help!
