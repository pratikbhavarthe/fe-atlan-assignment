import React from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const menuItems = [
        {
			name: "Explore",
			href: "",
		},
		{
			name: "Favourite",
			href: "",
		},
		{
			name: "Top Models",
			href: "",
		},
    ];
    const navigate = useNavigate();

	const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
		<div className="relative w-full bg-[#71b3ff] border-b font-[Helvetica,sans-serif]">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
				<div className="inline-flex items-center space-x-2">
					<button
						onClick={() => {
							navigate("/");
						}}
						className="hover:cursor-pointer hover:font-bold hover:text-[#834aff] text-[#fddb1a]"
					>
						<span className="font-bold text-2xl font-[Outfit,sans-serif]">
							AI MODELS MARKETPLACE
						</span>
					</button>
				</div>
				<div className="hidden md:block">
					<ul className="inline-flex space-x-8">
						{menuItems.map((item) => (
							<li key={item.name}>
								<a
									href={item.href}
									className="text-lg font-semibold hover:text-[#834aff] text-[#fddb1a]"
								>
									{item.name}
								</a>
							</li>
						))}
					</ul>
				</div>
				<div className="hidden md:block">
					<button
						type="button"
						onClick={() => {
							navigate("/UploadModel");
						}}
						className="hover:text-[#834aff] text-[#fddb1a] rounded-lg bg-[#fd5526] px-3 py-2 text-lg font-semibold shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
					>
						Upload Model
					</button>
				</div>
				<div className="md:hidden">
					<Menu
						onClick={toggleMenu}
						className="h-6 w-6 cursor-pointer"
					/>
				</div>
				{isMenuOpen && (
					<div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
						<div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
							<div className="px-5 pb-6 pt-5">
								<div className="flex items-center justify-between">
									<div className="inline-flex items-center space-x-2">
										<button
											onClick={() => {
												navigate("/");
											}}
											className="hover:cursor-pointer hover:font-bold hover:text-[#834aff]"
										>
											<span className="font-bold">
												AI MODEL MARKETPLACE 
											</span>
										</button>
									</div>
									<div className="-mr-2">
										<button
											type="button"
											onClick={toggleMenu}
											className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
										>
											<span className="sr-only">
												Close Menu
											</span>
											<X
												className="h-6 w-6"
												aria-hidden="true"
											/>
										</button>
									</div>
								</div>
								<div className="mt-6">
									<nav className="grid gap-y-4">
										{menuItems.map((item) => (
											<a
												key={item.name}
												href={item.href}
												className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
											>
												<span className="ml-3 text-base font-medium text-gray-900">
													{item.name}
												</span>
											</a>
										))}
									</nav>
								</div>
								<button
									type="button"
									onClick={() => {
										navigate("/UploadModel");
									}}
									className="mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
								>
									Upload Model
								</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default NavBar;