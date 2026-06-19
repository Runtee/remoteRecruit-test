export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#11142D',
        cyan: {
          DEFAULT: '#52B4DA',
          deep: '#50C0E3',
        },
        royal: {
          deep: '#1E3E85',
          mid: '#336DA6',
        },
        mint: '#19CDB8',
        pill: '#C2EEFF',
        danger: '#FF1F1F',
        ink: {
          dark: '#323445',
          body: '#6D6E7A',
          soft: '#767784',
          muted: '#808191',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['53px', '68px'],
        h2: ['40px', '52px'],
        h2lg: ['44px', '57px'],
        lead: ['20px', '32px'],
        body: ['19px', '35px'],
        bodysm: ['18px', '33px'],
        caption: ['16px', '26px'],
        captionsm: ['14px', '22px'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #1E3E85 0%, #336DA6 100%)',
        'footer-gradient': 'linear-gradient(135deg, #336DA6 0%, #1E3E85 100%)',
        'badge-gradient': 'linear-gradient(132.56deg, #52B4DA 5.63%, #1E3E85 106.18%)',
        'check-gradient': 'linear-gradient(135deg, #52B4DA 0%, #1E3E85 100%)',
        'cta-gradient': 'linear-gradient(129.98deg, #52B4DA -106.35%, #1E3E85 95.25%)',
        'check-muted': 'linear-gradient(135deg, #A2A3B8 0%, #808191 100%)',
        'skill-gradient': 'linear-gradient(135deg, #5799EB 0%, #9F74FB 100%)',
        'signup-gradient': 'linear-gradient(116deg, #EEF1FB 0%, #ECE9FB 60%, #E7ECFB 100%)',
        'amber-gradient': 'linear-gradient(135deg, #FFED43 0%, #F29939 100%)',
        'social-gradient': 'linear-gradient(135deg, #EBEDFF 0%, #ADB8FF 100%)',
      },
      boxShadow: {
        card: '0 24px 60px -24px rgba(17, 20, 45, 0.22)',
        float: '0 18px 44px -16px rgba(17, 20, 45, 0.28)',
        nav: '0 12px 40px -18px rgba(17, 20, 45, 0.45)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fade-in 0.7s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
