const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 mt-16">

            {/* Main Footer */}
            <div className="container mx-auto px-6 py-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-md bg-linear-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                                <span className="text-white text-xs font-bold">
                                    DS
                                </span>
                            </div>

                            <h2 className="font-bold text-pink-500">
                                DevStack
                            </h2>
                        </div>

                        <p className="mt-4 text-sm text-gray-500 max-w-xs">
                            Curated tools, technologies, and resources for developers
                            building modern software.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-5 mt-5 text-sm text-gray-600">
                            <a className="hover:text-purple-600">
                                GitHub
                            </a>

                            <a className="hover:text-purple-600">
                                Twitter
                            </a>

                            <a className="hover:text-purple-600">
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="text-xs font-bold  text-gray-800">
                            PRODUCT
                        </h3>

                        <ul className="mt-4 space-y-3 text-sm text-gray-500">
                            <li>
                                <a className="hover:text-purple-600">
                                    Home
                                </a>
                            </li>

                            <li>
                                <a className="hover:text-purple-600">
                                    Technologies
                                </a>
                            </li>

                            <li>
                                <a className="hover:text-purple-600">
                                    Projects
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-xs font-bold  text-gray-800">
                            COMPANY
                        </h3>

                        <ul className="mt-4 space-y-3 text-sm text-gray-500">
                            <li>
                                <a className="hover:text-purple-600">
                                    About
                                </a>
                            </li>

                            <li>
                                <a className="hover:text-purple-600">
                                    Contact
                                </a>
                            </li>

                            <li>
                                <a className="hover:text-purple-600">
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-xs font-bold t text-gray-800">
                            LEGAL
                        </h3>

                        <ul className="mt-4 space-y-3 text-sm text-gray-500">
                            <li>
                                <a className="hover:text-purple-600">
                                    Privacy Policy
                                </a>
                            </li>

                            <li>
                                <a className="hover:text-purple-600">
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-200">
                <div className="container mx-auto px-6 py-5 flex flex-col md:flex-row justify-between">

                    <p className="text-xs text-gray-400">
                        © 2026 DevStack. All rights reserved.
                    </p>

                    <div className="flex gap-5 text-xs text-gray-400">
                        <a className="hover:text-gray-600">
                            Privacy
                        </a>

                        <a className="hover:text-gray-600">
                            Terms
                        </a>
                    </div>

                </div>
            </div>

        </footer>
    );
};

export default Footer;