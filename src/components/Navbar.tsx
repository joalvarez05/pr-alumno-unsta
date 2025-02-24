import { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";
import decano from "../assets/decano-logo.png";
import flechaBus from "../assets/flechabus.svg";
import cajaPopular from "../assets/caja-popular.png";
import elMarques from "../assets/elmarques.png";
import poderSa from "../assets/logo-podersa.png";
import rapiCuotas from "../assets/logo-rapicuotas.png";
import sporting from "../assets/sporting.svg";
import superCanal from "../assets/supercanal.png";
import umbro from "../assets/umbro.svg";
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const toggleSubMenu = (menu: string) => {
    setActiveSubMenu(activeSubMenu === menu ? null : menu);
  };

  const dropdownMenus = {
    futbol: [
      {
        name: "Plantel Profesional",
        subMenu: ["Plantel (jugadores y cuerpo técnico)", "Estadísticas"],
      },
      {
        name: "Reserva AFA",
        subMenu: ["Plantel", "Estadísticas"],
      },
      "Juveniles AFA",
      "Liga Tucumana",
      "Fútbol Femenino",
    ],
    institucional: [
      "Noticias",
      '"El Monumental"',
      "Nuestra Historia",
      "Comisión Directiva",
      "Estatuto",
      "Compromiso y Valores",
      "Infraestructura",
      "Responsabilidad Social",
      "Centro de Estudio Terciarios",
      "Información Económica y Presupuestaria",
    ],
    polideportivo: [
      "Básquet",
      "Hockey",
      "Vóley",
      "Futsal",
      "Tenis",
      "Fútbol Senior",
      {
        name: "Recreativo",
        subMenu: ["Escuela Fútbol", "Colonia de Vacaciones"],
      },
    ],
    socios: [
      "Quiero SER SOCIO",
      "Portal",
      "Socios Vitalicios",
      "Preguntas Frecuentes",
      "Noticias de Socios",
    ],
    prensa: [
      "Proceso de Acreditaciones",
      "Medios Visitantes",
      "Manual de Conducta",
      "Revista Digital",
      "Multimedia",
    ],
    marketing: ["Manual de Marca"],
    entradas: ["Accesos (mapas)"],
  };

  const handleMouseEnter = (menu: string) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <div>
      <div className="mx-auto flex flex-wrap items-center justify-center bg-[#72BAE8] py-2">
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm">
          <div className="flex items-center gap-3 sm:pe-10">
            <a href="#" className="hover:text-white cursor-pointer font-medium">
              Tienda Oficial "DK" Store
            </a>
          </div>

          {/* Contenedor del carrusel */}
          <div className="relative w-full sm:w-[400px] overflow-hidden">
            <div className="flex min-w-max animate-scroll gap-4 scrolling">
              {/* Logos */}
              <a
                href="https://www.flechabus.com.ar/inicio?lang=es_AR"
                target="_blank"
              >
                <img
                  src={flechaBus}
                  alt="flecha bus logo"
                  className="h-5 sm:h-5"
                  draggable="false"
                  title="Ir a Flecha Bus"
                />
              </a>
              <a href="https://www.cajapopular.gov.ar/" target="_blank">
                <img
                  src={cajaPopular}
                  alt="caja popular logo"
                  className="h-4 sm:h-5"
                  draggable="false"
                  title="Ir a Caja Popular"
                />
              </a>
              <a href="#">
                <img
                  src={elMarques}
                  alt="supermercado el marques logo"
                  className="h-5 sm:h-6"
                  draggable="false"
                />
              </a>
              <a href="https://www.podersa.com.ar/index.php" target="_blank">
                <img
                  src={poderSa}
                  alt="podersa tucuman logo"
                  className="h-4 sm:h-5"
                  draggable="false"
                  title="Ir a Podersa"
                />
              </a>
              <a href="https://www.rapicuotas.com.ar/" target="_blank">
                <img
                  src={rapiCuotas}
                  alt="rapi cuotas logo"
                  className="h-4 sm:h-5"
                  draggable="false"
                  title="Ir a Rapi Cuotas"
                />
              </a>
              <a href="https://www.sporting.com.ar/" target="_blank">
                <img
                  src={sporting}
                  alt="sporting logo"
                  className="h-4 sm:h-5"
                  draggable="false"
                  title="Ir a Sporting"
                />
              </a>
              <a href="https://www.superconectados.ar/" target="_blank">
                <img
                  src={superCanal}
                  alt="super conectados logo"
                  className="h-4 sm:h-5"
                  draggable="false"
                  title="Ir a Super Conectados"
                />
              </a>
              <a href="https://tienda.umbro.com.ar/" target="_blank">
                <img
                  src={umbro}
                  alt="umbro logo"
                  className="h-4 sm:h-5 text-black"
                  draggable="false"
                  title="Ir a Umbro"
                />
              </a>

              {/* Duplicamos los logos para hacer el bucle infinito */}
              <a
                href="https://www.flechabus.com.ar/inicio?lang=es_AR"
                target="_blank"
              >
                <img
                  src={flechaBus}
                  alt="flecha bus logo"
                  className="h-5 sm:h-5"
                  draggable="false"
                  title="Ir a Flecha Bus"
                />
              </a>
              <a href="https://www.cajapopular.gov.ar/" target="_blank">
                <img
                  src={cajaPopular}
                  alt="caja popular logo"
                  className="h-4 sm:h-5"
                  draggable="false"
                  title="Ir a Caja Popular"
                />
              </a>
              <a href="#">
                <img
                  src={elMarques}
                  alt="supermercado el marques logo"
                  className="h-5 sm:h-6"
                  draggable="false"
                />
              </a>
              <a href="https://www.podersa.com.ar/index.php" target="_blank">
                <img
                  src={poderSa}
                  alt="podersa tucuman logo"
                  className="h-4 sm:h-5"
                  draggable="false"
                  title="Ir a Podersa"
                />
              </a>
              <a href="https://www.rapicuotas.com.ar/" target="_blank">
                <img
                  src={rapiCuotas}
                  alt="rapi cuotas logo"
                  className="h-4 sm:h-5"
                  draggable="false"
                  title="Ir a Rapi Cuotas"
                />
              </a>
              <a href="https://www.sporting.com.ar/" target="_blank">
                <img
                  src={sporting}
                  alt="sporting logo"
                  className="h-4 sm:h-5"
                  draggable="false"
                  title="Ir a Sporting"
                />
              </a>
              <a href="https://www.superconectados.ar/" target="_blank">
                <img
                  src={superCanal}
                  alt="super conectados logo"
                  className="h-4 sm:h-5"
                  draggable="false"
                />
              </a>
              <a href="https://tienda.umbro.com.ar/" target="_blank">
                <img
                  src={umbro}
                  alt="umbro logo"
                  className="h-4 sm:h-5"
                  draggable="false"
                  title="Ir a Super Conectados"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav className="bg-[#0C4DA2] text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-end">
            {/* Logo */}
            <div className="py-2 sm:py-4 absolute left-16 top-1">
              <a href="/">
                <img
                  src={decano}
                  alt="logo Atlético Tucumán"
                  className="h-10 md:h-14 lg:h-16"
                />
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-white py-3 pe-2 "
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={26} strokeWidth={3}/>
            </button>

            {/* Navigation Links - Desktop */}
            <div className="hidden lg:flex items-center space-x-6">
              {Object.entries(dropdownMenus).map(([key, items]) => (
                <div
                  key={key}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(key)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className="flex items-center space-x-1 font-semibold text-white hover:text-gray-300 py-3"
                    onClick={() => toggleDropdown(key)}
                  >
                    <span className="capitalize">{key}</span>
                    <ChevronDown
                      size={16}
                      className={`transform transition-transform duration-200 ${
                        activeDropdown === key ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`absolute top-full left-0 bg-white text-gray-800 w-48 rounded-b-lg shadow-lg transition-all duration-300 ${
                      activeDropdown === key
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    {items.map((item, index) => (
                      <div key={index} className="relative group/item">
                        {typeof item === "string" ? (
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                          >
                            {item}
                          </a>
                        ) : (
                          <div>
                            <button className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors flex items-center justify-between">
                              {item.name}
                              <ChevronDown
                                size={16}
                                className="rotate-[-90deg]"
                              />
                            </button>
                            <div className="absolute left-full top-0 bg-white w-48 rounded-lg shadow-lg hidden group-hover/item:block">
                              {item.subMenu.map((subItem, subIndex) => (
                                <a
                                  key={subIndex}
                                  href="#"
                                  className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                                >
                                  {subItem}
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu */}
          <div
            className={`lg:hidden transition-all duration-300 ${
              isMenuOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
            }`}
          >
            <div className="py-2 space-y-1">
              {Object.entries(dropdownMenus).map(([key, items]) => (
                <div key={key} className="relative">
                  <button
                    className="w-full flex items-center justify-between px-4 py-2 text-white hover:bg-blue-700 transition-colors"
                    onClick={() => toggleDropdown(key)}
                  >
                    <span className="capitalize">{key}</span>
                    <ChevronDown
                      size={16}
                      className={`transform transition-transform duration-200 ${
                        activeDropdown === key ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`bg-blue-800 transition-all duration-300 ${
                      activeDropdown === key ? "block" : "hidden"
                    }`}
                  >
                    {items.map((item, index) => (
                      <div key={index}>
                        {typeof item === "string" ? (
                          <a
                            href="#"
                            className="block px-6 py-2 text-white hover:bg-blue-700 transition-colors"
                          >
                            {item}
                          </a>
                        ) : (
                          <div>
                            <button
                              className="w-full text-left px-6 py-2 text-white hover:bg-blue-700 transition-colors flex items-center justify-between"
                              onClick={() => toggleSubMenu(item.name)}
                            >
                              {item.name}
                              <ChevronDown
                                size={16}
                                className={`transform transition-transform duration-200 ${
                                  activeSubMenu === item.name
                                    ? "rotate-180"
                                    : ""
                                }`}
                              />
                            </button>
                            <div
                              className={`bg-blue-900 transition-all duration-300 ${
                                activeSubMenu === item.name ? "block" : "hidden"
                              }`}
                            >
                              {item.subMenu.map((subItem, subIndex) => (
                                <a
                                  key={subIndex}
                                  href="#"
                                  className="block px-8 py-2 text-white hover:bg-blue-700 transition-colors"
                                >
                                  {subItem}
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
