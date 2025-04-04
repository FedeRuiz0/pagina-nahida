import { Leaf, Heart } from "lucide-react";

export default function IconTest() {
  return (
    <div className="p-10">
      <p>Probando íconos:</p>
      <Leaf className="w-10 h-10 text-green-600" />
      <Heart className="w-10 h-10 text-red-600" />
    </div>
  );
}

