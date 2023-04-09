/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */

export default function Social(props) {
  let { href, img } = props;
  return (
    <li>
      <a href={href} target="_blank">
        <img src={img} />
      </a>
    </li>
  );
}
