import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

export default function SocialMedia() {
  return (
    <div className="flex gap-2 py-5">
      <div>
        <a
          href="https://www.linkedin.com/in/erkanaltinors/"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Linkedin Profile"
        >
          <LinkedinLogo weight="duotone" className="text-white" size={32} />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/erkanaltinors"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Github Profile"
        >
          <GithubLogo weight="duotone" className="text-white" size={32} />
        </a>
      </div>
    </div>
  );
}
