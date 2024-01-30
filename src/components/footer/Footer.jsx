export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer>
      <div>{`${date} MY App. All rights reserved.`}</div>
      <div></div>
    </footer>
  );
}
