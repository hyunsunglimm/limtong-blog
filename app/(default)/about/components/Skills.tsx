import { skills } from "@/static/about";
import Badge from "./Badge";

export default function Skills() {
  return (
    <section>
      <p className="text-center text-3xl font-bold my-8">
        주로 사용하는 기술들 입니다.
      </p>
      <ul className="flex flex-wrap gap-4">
        {skills.map((skill, i) => (
          <Badge key={i} title={skill.title} url={skill.url} />
        ))}
      </ul>
    </section>
  );
}
