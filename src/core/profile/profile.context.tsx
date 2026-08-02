import React from "react";

interface Context {
  userName: string;
  setUserProfile: (userName:string) => void;
  logout: () => void;
}

const noUserLogin = "no user login";

const ProfileContext = React.createContext<Context>({
  userName: noUserLogin,
  setUserProfile: () =>{},
  logout: () => {}
});

interface Props {
  children: React.ReactNode;
}

export const ProfileProvider : React.FC<Props> = (props) => {
  const {children} = props;
  const [userProfile, setUserProfile] = React.useState<string>("");

  const logout = React.useCallback(() => {
    setUserProfile("");
  }, []);

  return (
    <ProfileContext.Provider
    value= {{
      userName:userProfile,
      setUserProfile,
      logout,
    }}>
      {children}
    </ProfileContext.Provider>
  )
};

export const useProfileContext = () => React.useContext(ProfileContext)