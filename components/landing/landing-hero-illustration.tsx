"use client";

import { motion } from "framer-motion";

export function LandingHeroIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none p-4">
      <svg
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-[560px]"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="bg-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fdf2f8" />
            <stop offset="100%" stopColor="#ede9fe" />
          </linearGradient>
          <radialGradient id="cream-circle" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fffdfa" />
            <stop offset="80%" stopColor="#fef6f1" />
            <stop offset="100%" stopColor="#fde8d8" stopOpacity="0.6" />
          </radialGradient>
          <linearGradient id="hair-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#312e81" />
            <stop offset="50%" stopColor="#1e1b4b" />
            <stop offset="100%" stopColor="#0f0d2e" />
          </linearGradient>
          <linearGradient id="skin-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fef6f1" />
            <stop offset="100%" stopColor="#fde8d8" />
          </linearGradient>
          <linearGradient id="dress-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fbcfe8" />
            <stop offset="40%" stopColor="#f9a8d4" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
          <linearGradient id="dress-highlight" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="leaf-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
          <linearGradient id="leaf-grad-2" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>

        {/* ROUNDED SQUARE BACKGROUND */}
        <rect x="20" y="20" width="560" height="560" rx="120" fill="url(#bg-grad)" />

        {/* PALE CREAM CIRCLE BEHIND WOMAN */}
        <circle cx="290" cy="300" r="200" fill="url(#cream-circle)" />

        {/* === HAIR (flowing left, behind the figure) === */}
        <motion.g
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Main hair mass */}
          <path
            d="M 252 155 C 228 148, 200 165, 185 195 C 172 220, 168 250, 178 280
                 C 185 300, 195 315, 200 335 C 203 348, 202 358, 198 370
                 C 195 380, 192 388, 190 395 C 200 385, 208 370, 212 352
                 C 216 335, 215 315, 210 295 C 205 275, 196 258, 192 238
                 C 188 218, 192 198, 205 182 C 218 168, 235 160, 252 155Z"
            fill="url(#hair-grad)"
          />
          {/* Hair overlay strand */}
          <path
            d="M 248 148 C 218 140, 190 155, 175 185 C 162 212, 158 245, 168 275
                 C 175 296, 185 312, 190 332 C 193 345, 192 358, 188 372
                 C 198 360, 205 342, 206 322 C 207 302, 204 280, 198 260
                 C 190 238, 182 218, 188 198 C 194 178, 215 158, 248 148Z"
            fill="url(#hair-grad)"
            opacity="0.5"
          />
          {/* Single flowing strand */}
          <path
            d="M 235 160 C 210 180, 195 210, 192 240 C 189 270, 192 295, 200 315
                 C 205 328, 208 342, 205 358 C 203 368, 200 375, 196 382"
            stroke="#4338ca"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.3"
          />
          {/* Extra flowing strand */}
          <path
            d="M 240 165 C 220 182, 205 210, 202 240 C 199 270, 202 292, 210 310
                 C 215 322, 218 335, 215 348"
            stroke="#312e81"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
            opacity="0.25"
          />
        </motion.g>

        {/* === FIGURE === */}
        <motion.g
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* ---- HEAD ---- */}
          <ellipse cx="275" cy="185" rx="24" ry="30" fill="url(#skin-grad)" />

          {/* ---- FACE (closed eyes, minimal) ---- */}
          {/* Nose profile */}
          <path
            d="M 295 178 C 298 183, 298 188, 295 192"
            stroke="#e87a4a" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.2"
          />
          {/* Closed eye */}
          <path
            d="M 288 182 C 291 181, 294 181, 297 182"
            stroke="#c45a30" strokeWidth="0.9" strokeLinecap="round" fill="none" opacity="0.15"
          />
          {/* Gentle smile */}
          <path
            d="M 290 192 C 293 194, 296 194, 299 192"
            stroke="#c45a30" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.12"
          />

          {/* ---- NECK ---- */}
          <rect x="268" y="214" width="14" height="16" rx="5" fill="url(#skin-grad)" />

          {/* ---- BODY (torso, skin area above dress) ---- */}
          <path
            d="M 256 240 C 252 255, 250 268, 254 280 C 258 290, 264 296, 272 298
                 C 280 296, 286 290, 290 280 C 294 268, 292 255, 288 240"
            fill="url(#skin-grad)"
          />

          {/* ---- DRESS (pink gradient, from chest down) ---- */}
          <path
            d="M 254 276 C 250 288, 248 305, 250 325 C 252 345, 254 365, 256 385
                 C 258 405, 260 425, 262 445 C 264 462, 268 478, 276 485
                 C 284 490, 294 490, 302 486 C 310 482, 314 474, 316 462
                 C 318 448, 318 428, 318 408 C 318 388, 318 370, 322 358
                 C 330 345, 336 332, 336 318 C 336 304, 330 294, 322 286
                 C 314 278, 304 274, 294 272 C 284 270, 274 272, 266 274
                 C 260 276, 256 276, 254 276Z"
            fill="url(#dress-grad)"
          />

          {/* Dress highlight/overlay */}
          <path
            d="M 258 285 C 256 300, 256 320, 258 340 C 260 360, 262 380, 264 400
                 C 266 420, 268 440, 272 458 C 276 472, 282 480, 288 482"
            fill="url(#dress-highlight)"
          />

          {/* ---- BELLY (pregnancy bump overlay) ---- */}
          <motion.ellipse
            cx="322" cy="352" rx="28" ry="32"
            fill="url(#dress-grad)"
            animate={{ rx: [28, 31, 28], ry: [32, 35, 32] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Belly highlight */}
          <motion.ellipse
            cx="318" cy="344" rx="14" ry="12"
            fill="#fff" fillOpacity="0.12"
            animate={{ rx: [12, 16, 12], ry: [10, 14, 10] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* ---- ARMS ---- */}
          {/* Far arm (left, behind body) */}
          <path
            d="M 260 258 C 254 278, 252 300, 262 322 C 270 338, 282 348, 294 350"
            stroke="url(#skin-grad)"
            strokeWidth="9"
            strokeLinecap="round"
            fill="none"
            opacity="0.5"
          />
          {/* Near arm (right, in front cradling belly) */}
          <motion.path
            d="M 282 256 C 278 275, 276 298, 280 320 C 286 340, 296 352, 308 355"
            stroke="url(#skin-grad)"
            strokeWidth="10"
            strokeLinecap="round"
            fill="none"
            animate={{ d: [
              "M 282 256 C 278 275, 276 298, 280 320 C 286 340, 296 352, 308 355",
              "M 282 256 C 276 275, 274 300, 278 322 C 284 342, 294 354, 306 357",
              "M 282 256 C 278 275, 276 298, 280 320 C 286 340, 296 352, 308 355",
            ]}}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Hand on belly */}
          <ellipse cx="302" cy="353" rx="7" ry="5" fill="url(#skin-grad)" opacity="0.8" />

          {/* ---- DRESS HEM DETAIL (subtle) ---- */}
          <path
            d="M 262 460 C 268 470, 276 478, 285 482 C 294 485, 303 484, 310 480"
            stroke="#ec4899" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.2"
          />
        </motion.g>

        {/* === WHITE HEART ON BELLY === */}
        <motion.g
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ originX: "322px", originY: "345px" }}
        >
          <path
            d="M 322 335 C 319 331, 315 329, 312 331
                 C 309 333, 308 337, 311 340
                 L 322 350 L 333 340
                 C 336 337, 335 333, 332 331
                 C 329 329, 325 331, 322 335Z"
            fill="#fff" fillOpacity="0.9"
          />
        </motion.g>

        {/* === FLOATING PINK HEART === */}
        <motion.g
          animate={{ y: [0, -6, 0], rotate: [-3, 3, -3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{ originX: "440px", originY: "280px" }}
        >
          <path
            d="M 440 272 C 437 268, 433 266, 430 268
                 C 427 270, 426 274, 429 277
                 L 440 287 L 451 277
                 C 454 274, 453 270, 450 268
                 C 447 266, 443 268, 440 272Z"
            fill="#f472b6" fillOpacity="0.7"
          />
        </motion.g>

        {/* === PURPLE BOTANICAL LEAVES (right side) === */}

        {/* Large leaf - lower right */}
        <motion.g
          animate={{ rotate: [0, 3, -2, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ originX: "490px", originY: "460px" }}
        >
          <path
            d="M 510 470 C 525 440, 535 405, 520 385
                 C 505 365, 485 375, 480 400
                 C 475 425, 490 455, 510 470Z"
            fill="url(#leaf-grad)"
          />
          <path
            d="M 510 470 C 508 448, 502 420, 498 398"
            stroke="#6d28d9" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.25"
          />
        </motion.g>

        {/* Medium leaf - upper right */}
        <motion.g
          animate={{ rotate: [0, -2, 4, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{ originX: "490px", originY: "280px" }}
        >
          <path
            d="M 505 290 C 520 265, 530 235, 518 218
                 C 506 201, 486 210, 482 232
                 C 478 254, 490 278, 505 290Z"
            fill="url(#leaf-grad-2)"
          />
          <path
            d="M 505 290 C 500 272, 494 250, 492 232"
            stroke="#7c3aed" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.2"
          />
        </motion.g>

        {/* Small leaf - mid right */}
        <motion.g
          animate={{ rotate: [0, 3, -1, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          style={{ originX: "500px", originY: "370px" }}
        >
          <path
            d="M 508 378 C 518 358, 524 338, 514 325
                 C 504 312, 490 320, 488 338
                 C 486 356, 496 370, 508 378Z"
            fill="url(#leaf-grad)"
            opacity="0.7"
          />
        </motion.g>

        {/* === SUBTLE DECORATIVE DOTS === */}
        <circle cx="150" cy="220" r="3" fill="#f9a8d4" opacity="0.2" />
        <circle cx="140" cy="235" r="2" fill="#a78bfa" opacity="0.15" />
        <circle cx="160" cy="238" r="2.5" fill="#f9a8d4" opacity="0.15" />
      </svg>
    </div>
  );
}
