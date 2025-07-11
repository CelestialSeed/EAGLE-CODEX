export default function Home() {
  return (
    <div className="p-8 max-w-4xl mx-auto text-white bg-black min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Tribes of Humanity Global Alliance</h1>
      <p className="mb-4">
        We are a sovereign Earth-based initiative cultivating regenerative ecosystems, tribal knowledge,
        and AI-integrated platforms to empower humanity and the New Earth vision.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Offerings</h2>
      <ul className="list-disc ml-6">
        <li>Books and teachings (Spiritual Warrior Manifesto)</li>
        <li>Digital courses & council mentorship</li>
        <li>AI-assisted community building tools</li>
        <li>Merchandise and mission-aligned products</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Legal Pages</h2>
      <ul className="list-disc ml-6">
        <li>
          <a href="https://www.termsfeed.com/live/26cd59b4-1de5-4daf-9254-c353c01678bc" className="text-blue-400 underline">
            Terms of Service
          </a>
        </li>
        <li>
          <a href="https://www.termsfeed.com/live/9c841c2f-186f-46fd-a4c7-8dc04a707bb2" className="text-blue-400 underline">
            Privacy Policy
          </a>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Contact</h2>
      <p>Email: <a href="mailto:eaglecodex@eaglecodex.com" className="underline text-blue-400">eaglecodex@eaglecodex.com</a></p>
    </div>
  );
}
