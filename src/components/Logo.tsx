export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center shadow-lg">
          <div className="text-white font-serif text-2xl tracking-wider">
            FR
          </div>
        </div>
        <div className="absolute -bottom-1 -right-1 w-12 h-12 bg-blue-500/20 rounded-lg -z-10" />
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-semibold text-gray-900">Flávia Rabelo</span>
        <span className="text-xs text-gray-600 tracking-wider">ADVOCACIA</span>
      </div>
    </div>
  );
} 