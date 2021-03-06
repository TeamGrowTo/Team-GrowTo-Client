import { useMediaQuery } from "react-responsive";
interface IdeviceQuery {
  [key: string]: string;
}
export const deviceQuery: IdeviceQuery = {
  mobile: "(max-width: 550px)",
  desktop: "(min-width: 551px)",
};
interface Props {
  children: JSX.Element;
  mobile?: boolean;
  desktop?: boolean;
}
function Screen({ children, mobile, desktop }: Props) {
  let renderFlag = false;

  const isMobile = useMediaQuery({
    query: deviceQuery.mobile,
  });

  const isDesktop = useMediaQuery({
    query: deviceQuery.desktop,
  });

  if (mobile) {
    renderFlag = renderFlag || isMobile;
  }
  if (desktop) {
    renderFlag = renderFlag || isDesktop;
  }

  return <>{renderFlag && children}</>;
}

export default Screen;
