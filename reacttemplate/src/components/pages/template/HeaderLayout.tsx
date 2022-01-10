
import { type } from "os";
import { Children, memo, ReactNode, VFC } from "react";
import { Header } from "../../../oganism/layout/Header";

type Props = {
    children: ReactNode;
}

export const HeaderLayout: VFC<Props> = memo((props) => {
    const { children } = props;
    return (
        <>
            <Header />
            { children }
        </>
    )
});