import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

type WelcomeProps = {

};

type SignupProps = {

};
type FormUserProps = {

};
type FavoriteProps = {

};
type HomeProps = {

};
type SocialProps = {

};
type Favorite_2Props = {

};
type AccountProps = {

};
type HomeStackProps = {

};





export type MainStackParamList = {
    Welcome: WelcomeProps | undefined;
    Signup: SignupProps | undefined;
    FormUser: FormUserProps | undefined;
    Favorite: FavoriteProps | undefined;
    Home: HomeProps | undefined;
    Social: SocialProps | undefined;
    Favorite_2: Favorite_2Props | undefined;
    Account: AccountProps | undefined;
    HomeStack: HomeStackProps | undefined;
  

};

export type MainStackNavigation = StackNavigationProp<MainStackParamList>;

export type S = keyof MainStackParamList;

export type MainStackScreenProps<RouterName extends S> = StackScreenProps<
    MainStackParamList,
    RouterName
>;