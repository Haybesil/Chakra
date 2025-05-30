const Footer = () => {
    return (
      <div className="w-full py-[120px] px-10 bg-[#451E17] max-sm:py-12 max-sm:px-6">
        <div className="max-w-[1280px] m-auto w-full">
          <div className="w-full flex justify-between items-center flex-col gap-12 max-sm:gap-6">
            {/* Top section with logo and navigation */}
            <div className="w-full flex justify-between max-sm:flex-col max-sm:gap-6 items-center">
              {/* Logo */}
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="172" height="48" viewBox="0 0 172 48" fill="none">
                  <g id="Logo / Style II">
                    <path id="Union" d="M21.9719 0.889776C21.4874 -0.264859 19.9092 -0.305487 19.3706 0.824912C14.8725 10.2656 19.0868 13.4847 23.6735 16.9882C27.2861 19.7476 31.1297 22.6835 31.1297 28.9745C31.1297 34.9494 26.0774 39.7929 19.8452 39.7929C13.6129 39.7929 8.56066 34.9494 8.56066 28.9745C8.56066 23.9999 9.42169 19.3025 11.7633 15.1041C12.5124 13.761 11.3321 12.073 9.97895 12.8039C4.004 16.0308 0 22.0476 0 28.9745C0 39.482 8.88499 48 19.8452 48C30.8054 48 39.6903 39.482 39.6903 28.9745C39.6903 21.4139 37.2477 17.3474 30.1029 11.8735C24.7459 7.76927 24.0617 6.06608 22.6366 2.51842C22.435 2.01647 22.2185 1.4776 21.9719 0.889776Z" fill="#FCEBDE"></path>
                    <path id="Union_2" d="M19.4564 34.2429C22.8949 34.2429 25.6823 31.4554 25.6823 28.017C25.6823 24.5785 22.8949 21.791 19.4564 21.791C16.0179 21.791 13.2305 24.5785 13.2305 28.017C13.2305 31.4554 16.0179 34.2429 19.4564 34.2429Z" fill="#FCEBDE"></path>
                    <path id="Union_3" fillRule="evenodd" clipRule="evenodd" d="M48 28.104C48 35.9591 53.2489 41.208 61.104 41.208C67.1605 41.208 72.0056 37.0602 73.2169 30.8202H68.4819C67.4908 34.4174 64.5544 36.8033 61.104 36.8033C56.1854 36.8033 52.9186 33.3162 52.9186 28.104C52.9186 22.8918 56.1854 19.4047 61.104 19.4047C64.1873 19.4047 67.0504 21.5704 68.2617 24.8005H73.1068C71.6386 18.9275 66.8301 15 61.104 15C53.2489 15 48 20.2489 48 28.104ZM75.8693 40.6941V15.5139H80.274V23.6993C81.4853 22.5614 83.4674 21.8273 85.266 21.8273C90.2947 21.8273 93.6349 24.8005 93.6349 29.2786V40.6941H89.2302V29.7925C89.2302 27.3332 87.4316 25.7181 84.7521 25.7181C82.0726 25.7181 80.274 27.3332 80.274 29.7925V40.6941H75.8693ZM119.565 40.6941V15.5139H123.97V28.5812L130.173 22.3412H136.34L128.558 29.976L137.221 40.6941H131.568L125.401 33.0593L123.97 34.4908V40.6941H119.565ZM160.205 41.2079C154.479 41.2079 150.662 37.3171 150.662 31.5176C150.662 25.718 154.479 21.8272 160.205 21.8272C162.371 21.8272 164.757 22.8183 166.152 24.3232V22.3411H170.556V40.694H166.152V38.7119C164.757 40.2169 162.371 41.2079 160.205 41.2079ZM160.646 37.3171C163.949 37.3171 166.152 35.0046 166.152 31.5176C166.152 28.0305 163.949 25.718 160.646 25.718C157.306 25.718 155.066 28.0305 155.066 31.5176C155.066 35.0046 157.306 37.3171 160.646 37.3171ZM139.71 22.3411V40.694H144.115V29.8291C144.115 27.3698 146.06 25.718 148.997 25.718H150.502V22.3411C149.988 22.1209 149.217 21.974 148.556 21.974C146.868 21.974 145.069 23.0018 144.115 24.5067V22.3411H139.71ZM96.284 31.5176C96.284 37.3171 100.101 41.2079 105.828 41.2079C107.993 41.2079 110.379 40.2169 111.774 38.7119V40.694H116.179V22.3411H111.774V24.3232C110.379 22.8183 107.993 21.8272 105.828 21.8272C100.101 21.8272 96.284 25.718 96.284 31.5176ZM111.774 31.5176C111.774 35.0046 109.572 37.3171 106.268 37.3171C102.928 37.3171 100.689 35.0046 100.689 31.5176C100.689 28.0305 102.928 25.718 106.268 25.718C109.572 25.718 111.774 28.0305 111.774 31.5176Z" fill="#FCEBDE"></path>
                  </g>
                </svg>
              </div>
              
              {/* Navigation links */}
              <div className="flex items-center gap-6 max-sm:gap-4 max-sm:justify-center flex-wrap">
                <div>
                  <a className="text-base font-normal leading-tight text-[#FCEBDE]" href="/home">Home</a>
                </div>
                <div>
                  <a className="text-base font-normal leading-tight text-[#FCEBDE]" href="/community">Community</a>
                </div>
                <div>
                  <a className="text-base font-normal leading-tight text-[#FCEBDE]" href="/ecosystem">Ecosystem</a>
                </div>
                <div>
                  <a className="text-base font-normal leading-tight text-[#FCEBDE]" href="/blog">Blog</a>
                </div>
                <div>
                  <a className="text-base font-normal leading-tight text-[#FCEBDE]" href="/careers">Careers</a>
                </div>
              </div>
            </div>
            
            {/* Bottom section with copyright and social media icons */}
            <div className="w-full flex justify-between items-center max-sm:flex-col-reverse max-sm:gap-6">
              {/* Copyright text */}
              <div className="text-base font-normal leading-tight opacity-40 text-[#FCEBDE]">
                © 2025 Chakra. All rights reserved.
              </div>
              
              {/* Social media icons */}
              <div className="flex  justify-end gap-6 items-center max-sm:justify-center">
                {/* Telegram */}
                <a href="https://t.me/ChakraProtocol" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.52401 19.2672L9.83464 14.5733L18.3568 6.89441C18.7341 6.55053 18.2792 6.38405 17.7798 6.68362L7.26031 13.3306L2.71073 11.8879C1.73418 11.6105 1.72313 10.9336 2.93261 10.4453L20.6538 3.60995C21.4639 3.24369 22.2407 3.80959 21.93 5.05243L18.9117 19.2672C18.7009 20.2769 18.0905 20.5211 17.2472 20.0551L12.6532 16.6595L10.445 18.8012C10.1898 19.0563 9.97892 19.2672 9.52401 19.2672Z" fill="#FCEBDE" />
                  </svg>
                </a>
                
                {/* Twitter/X */}
                <a href="https://twitter.com/ChakraChain" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M17.4636 3.5H20.3771L14.012 10.7748L21.5 20.6742H15.637L11.0448 14.6703L5.79041 20.6742H2.87519L9.68324 12.893L2.5 3.5H8.51187L12.6628 8.98783L17.4636 3.5ZM16.4411 18.9304H18.0555L7.63466 5.15225H5.90226L16.4411 18.9304Z" fill="#FCEBDE" />
                  </svg>
                </a>
                
                {/* Discord */}
                <a href="https://discord.gg/chakrachain" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18.9308 5.76368C17.6561 5.17878 16.2892 4.74785 14.8599 4.50104C14.8339 4.49627 14.8079 4.50818 14.7945 4.53198C14.6187 4.84466 14.4239 5.25258 14.2876 5.5732C12.7503 5.34306 11.221 5.34306 9.71527 5.5732C9.57887 5.24545 9.37707 4.84466 9.20048 4.53198C9.18707 4.50897 9.16107 4.49707 9.13504 4.50104C7.70659 4.74706 6.33963 5.17799 5.06411 5.76368C5.05307 5.76844 5.04361 5.77638 5.03732 5.78669C2.44449 9.66033 1.73421 13.4387 2.08265 17.1703C2.08423 17.1886 2.09447 17.206 2.10867 17.2171C3.81934 18.4734 5.47642 19.2361 7.10273 19.7416C7.12876 19.7496 7.15634 19.74 7.1729 19.7186C7.55761 19.1933 7.90054 18.6393 8.19456 18.0568C8.21192 18.0227 8.19535 17.9822 8.15989 17.9687C7.61594 17.7624 7.098 17.5108 6.59977 17.2251C6.56037 17.2021 6.55721 17.1457 6.59347 17.1187C6.69831 17.0402 6.80318 16.9584 6.9033 16.8759C6.92141 16.8608 6.94665 16.8576 6.96794 16.8671C10.2411 18.3615 13.7846 18.3615 17.0191 16.8671C17.0404 16.8568 17.0657 16.86 17.0846 16.8751C17.1847 16.9576 17.2895 17.0402 17.3952 17.1187C17.4314 17.1457 17.4291 17.2021 17.3897 17.2251C16.8914 17.5163 16.3735 17.7624 15.8288 17.9679C15.7933 17.9814 15.7775 18.0227 15.7949 18.0568C16.0952 18.6385 16.4381 19.1924 16.8157 19.7178C16.8315 19.74 16.8599 19.7496 16.8859 19.7416C18.5201 19.2361 20.1772 18.4734 21.8879 17.2171C21.9028 17.206 21.9123 17.1894 21.9139 17.1711C22.3309 12.857 21.2154 9.10956 18.9568 5.78748C18.9513 5.77638 18.9419 5.76844 18.9308 5.76368ZM8.68335 14.8982C7.69792 14.8982 6.88594 13.9935 6.88594 12.8824C6.88594 11.7713 7.68217 10.8666 8.68335 10.8666C9.69239 10.8666 10.4965 11.7793 10.4807 12.8824C10.4807 13.9935 9.68451 14.8982 8.68335 14.8982ZM15.329 14.8982C14.3435 14.8982 13.5316 13.9935 13.5316 12.8824C13.5316 11.7713 14.3278 10.8666 15.329 10.8666C16.338 10.8666 17.1421 11.7793 17.1264 12.8824C17.1264 13.9935 16.338 14.8982 15.329 14.8982Z" fill="#FCEBDE" />
                  </svg>
                </a>
                
                {/* Medium */}
                <a href="https://medium.com/@chakrachainbtc" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M13.3495 11.8125C13.3495 15.0203 10.7031 17.625 7.42476 17.625C4.14639 17.625 1.5 15.0203 1.5 11.8125C1.5 8.60472 4.14639 6 7.42476 6C10.7031 6 13.3495 8.60472 13.3495 11.8125ZM19.8404 11.8125C19.8404 14.8278 18.5107 17.2786 16.8781 17.2786C15.2455 17.2786 13.9157 14.8278 13.9157 11.8125C13.9157 8.79718 15.2455 6.34644 16.8781 6.34644C18.5107 6.34644 19.8404 8.78435 19.8404 11.8125ZM22.5 11.8125C22.5 14.5199 22.0392 16.714 21.4599 16.714C20.8806 16.714 20.4197 14.5199 20.4197 11.8125C20.4197 9.10513 20.8806 6.91101 21.4599 6.91101C22.0392 6.91101 22.5 9.10513 22.5 11.8125Z" fill="#FCEBDE" />
                  </svg>
                </a>
                
                {/* Mirror */}
                <a href="https://mirror.xyz/0xa3564d6065379D3cd262B7a3a88B0CBcf686B1f8" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5.5 9.69355C5.5 6.27295 8.41015 3.5 12 3.5C15.5899 3.5 18.5 6.27295 18.5 9.69355V18.5589C18.5 19.0786 18.0578 19.5 17.5122 19.5H6.48775C5.94223 19.5 5.5 19.0786 5.5 18.5589V9.69355Z" fill="#FCEBDE" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;