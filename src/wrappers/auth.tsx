import { ReactChild, ReactFragment, ReactPortal } from 'react';
import { Redirect } from 'umi';

export default (props: {
  children:
    | boolean
    | ReactChild
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) => {
  const isLogin = false;

  if (isLogin) {
    return (
      <div>
        <div>用户已经登陆，下面是真正的页面内容，本元素来自wrappers</div>
        <div>{props.children}</div>
      </div>
    );
  }

  return <Redirect to="/login" />;
};
