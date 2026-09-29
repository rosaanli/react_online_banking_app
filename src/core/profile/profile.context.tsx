import React from "react";

interface Context {
  userName: string;
  setUserProfile: (userName:string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const noUserLogin = "no user login";

const ProfileContext = React.createContext<Context>({
  userName: noUserLogin,
  setUserProfile: () =>{},
  logout: () => {},
  isAuthenticated: false
});

interface Props {
  children: React.ReactNode;
}

const STORAGE_KEY = "banking_user";

export const ProfileProvider : React.FC<Props> = (props) => {
  const {children} = props;
  const [userProfile, setUserProfileState] = React.useState<string>(() => {
    return sessionStorage.getItem(STORAGE_KEY) || "";
  });

  const setUserProfile = React.useCallback((name: string) => {
    if (name) sessionStorage.setItem(STORAGE_KEY, name);
    else sessionStorage.removeItem(STORAGE_KEY);
    setUserProfileState(name);
  }, []
  );

  const logout = React.useCallback(() => {
    sessionStorage.removeItem(STORAGE_KEY);
    setUserProfileState("");
  }, []);

  const isAuthenticated = !!userProfile;


  return (
    <ProfileContext.Provider
    value= {{
      userName:userProfile,
      setUserProfile,
      logout,
      isAuthenticated
    }}>
      {children}
    </ProfileContext.Provider>
  )
};

export const useProfileContext = () => React.useContext(ProfileContext)