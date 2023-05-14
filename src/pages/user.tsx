import { Link } from 'umi';

export default function User() {
  return (
    <div>
      <p>这是用户页面</p>
      <Link to="/work1">a link tag navagate to work1</Link>
    </div>
  );
}
