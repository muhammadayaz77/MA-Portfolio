import SkillLeftSection from '@/components/Home/Skills/SkillLeftSection';
import { SkillRightSection } from './Skills/SkillRightSection';

export default function Skill() {
  return (
    <div className="grid grid-cols-12 max-w-7xl mx-auto my-10">
      <SkillLeftSection />
      <SkillRightSection />
    </div>
  );
}
