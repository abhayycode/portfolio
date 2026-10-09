const stack = [
  { name: 'HTML', src: '/HTML5.svg' },
  { name: 'CSS', src: '/CSS3.svg' },
  { name: 'Tailwind', src: '/tailwind.svg' },
  { name: 'JavaScript', src: '/JavaScript.svg' },
  { name: 'TypeScript', src: '/TypeScript.svg' },
  { name: 'React', src: '/react.svg' },
  { name: 'Next.js', src: '/Next.js.svg' },
  { name: 'Redux', src: '/Redux.svg' },
  { name: 'Node.js', src: '/nodejs.svg' },
  { name: 'Express', src: '/Express.svg' },
  { name: 'Go', src: '/Go.svg' },
];

const LogoSet = ({ hidden = false }: { hidden?: boolean }) => {
  return (
    <ul
      className="marquee-set flex shrink-0 items-center gap-10 pr-10"
      aria-hidden={hidden}
    >
      {stack.map((item) => (
        <li key={item.name}>
          <img
            src={item.src}
            alt={hidden ? '' : item.name}
            width={40}
            height={40}
            className="h-10 w-10"
          />
        </li>
      ))}
    </ul>
  );
};

export const TechStack = () => {
  return (
    <div className="w-full flex flex-col gap-5">
      <p className="text-2xl mark w-fit">Tech Stack:</p>
      <div className="marquee">
        <div className="marquee-track flex w-max">
          <LogoSet />
          <LogoSet hidden />
        </div>
      </div>
    </div>
  );
};
