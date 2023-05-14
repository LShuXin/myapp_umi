import { ReactChild, ReactFragment, ReactPortal } from 'react';

export default (props: {
  children:
    | boolean
    | ReactChild
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) => {
  return (
    <div>
      <div>这里未来是顶部导航栏</div>
      <div>{props.children}</div>
      <div>这里未来是公共底部</div>
    </div>
  );
};
