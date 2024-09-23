import Image from "next/image";

export default function Profile() {
  return (
    <div className="flex gap-4">
      <Image
        src="/images/profile.png"
        alt="프로필 사진"
        width={200}
        height={300}
        className="rounded-md"
      />
      <div className="flex flex-col justify-between">
        <h2 className="text-4xl font-bold">
          안녕하세요, 세상을 최적화하는 개발자 임현성입니다.
        </h2>
        <p className={pClass}>
          <span className={spanClass}>문제를 정의하고 해결하는 것</span>이야말로
          진정한 개발자라고 생각합니다. <br />
          마주한 문제 상황과 해결한 방법을 문서화합니다.
        </p>
        <p className={pClass}>
          <span className={spanClass}>지속적인 성장</span>을 위해 스터디와
          사이드 프로젝트, 해커톤 등 여러 활동을 하고 있습니다. <br />
          필요한 것이라면 배우는 데에 거리낌이 없습니다.
        </p>
        <p className={pClass}>
          프로젝트를 하며 사람들의 반응에 흥미를 느낍니다.
          <br /> 코드를 작성하고 기능을 구현하여 세상 사람들에게{" "}
          <span className={spanClass}>즐거움과 편리함을 제공하는 일</span>을
          하고 싶습니다.
        </p>
      </div>
    </div>
  );
}

const pClass = "text-lg font-semibold";
const spanClass = "text-my";
