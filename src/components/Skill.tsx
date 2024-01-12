export function Skill({ label, icon }) {
  return (
    <li
      key={label}
      className="border-[1px] border-[var(--border-medium)] rounded-[30px] flex text-[16px] justify-center items-center gap-2 px-2 text-[var(--text-h3)]"
    >
      <span>{icon}</span>
      <span>{label}</span>
    </li>
  )
}
