import React, { useMemo, useState } from 'react';
import {
  FaArrowRight,
  FaBell,
  FaBoxOpen,
  FaBriefcase,
  FaBuilding,
  FaCalendarCheck,
  FaCartShopping,
  FaCheck,
  FaCircleCheck,
  FaCloudArrowUp,
  FaCreditCard,
  FaEnvelope,
  FaFileInvoice,
  FaGift,
  FaHeart,
  FaHouse,
  FaIdCard,
  FaLayerGroup,
  FaLocationDot,
  FaMagnifyingGlass,
  FaMinus,
  FaPaintbrush,
  FaPalette,
  FaPhone,
  FaPlus,
  FaRegHeart,
  FaRotateRight,
  FaShirt,
  FaStar,
  FaTruckFast,
  FaUser,
  FaWhatsapp,
  FaXmark,
} from 'react-icons/fa6';

const brand = 'PrintHub Lagos';

const productImages = {
  tshirt: '/assets/product-tshirt.jpg',
  mug: '/assets/product-mug.jpg',
  laptop: '/assets/product-laptop.jpg',
  banner: '/assets/banner.jpg',
  cards: '/assets/product-cards.jpg',
};

const products = [
  {
    id: 'round-neck-tshirt',
    name: 'Round Neck T-shirt',
    category: 'Apparel',
    subcategory: 'Custom T-shirts',
    price: 4500,
    image: productImages.tshirt,
    tags: ['shirt', 'tshirt', 'fashion', 'campaign'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Black', 'Navy', 'Orange'],
    materials: ['180GSM Cotton', 'Premium Cotton', 'Dry Fit'],
    estimate: '2-4 business days',
  },
  {
    id: 'corporate-mug',
    name: 'Corporate Mug',
    category: 'Promotional Items',
    subcategory: 'Mugs',
    price: 3200,
    image: productImages.mug,
    tags: ['mug', 'magic mug', 'photo mug', 'sublimation mug'],
    sizes: ['11oz', '15oz'],
    colors: ['White', 'Black', 'Blue'],
    materials: ['Ceramic', 'Magic Coated Ceramic'],
    estimate: '1-3 business days',
  },
  {
    id: 'business-cards',
    name: 'Matte Business Cards',
    category: 'Business Essentials',
    subcategory: 'Business cards',
    price: 12000,
    image: productImages.cards,
    tags: ['business cards', 'cards', 'complimentary cards'],
    sizes: ['Standard', 'Square', 'Folded'],
    colors: ['Full color', 'Black and gold', 'Minimal'],
    materials: ['350gsm Matte', 'Soft Touch', 'Spot UV'],
    estimate: '2-3 business days',
  },
  {
    id: 'roll-up-banner',
    name: 'Roll-up Banner',
    category: 'Signage',
    subcategory: 'Roll-up banners',
    price: 45000,
    image: productImages.banner,
    tags: ['banner', 'roll up', 'poster', 'large format'],
    sizes: ['2x5ft', '3x6ft', '4x6ft'],
    colors: ['Full color'],
    materials: ['PVC Flex', 'Premium Stand', 'Outdoor Vinyl'],
    estimate: '2-5 business days',
  },
  {
    id: 'laptop-branding',
    name: 'Laptop Branding Kit',
    category: 'Branding',
    subcategory: 'Vinyl wraps',
    price: 8500,
    image: productImages.laptop,
    tags: ['laptop', 'stickers', 'vinyl', 'branding'],
    sizes: ['13 inch', '14 inch', '15 inch', 'Custom'],
    colors: ['Full color', 'Matte black', 'Transparent'],
    materials: ['Vinyl', 'Matte Lamination', 'Gloss Lamination'],
    estimate: '2-4 business days',
  },
  {
    id: 'id-lanyard',
    name: 'ID Cards & Lanyards',
    category: 'Office Branding',
    subcategory: 'ID cards',
    price: 2500,
    image: productImages.cards,
    tags: ['id cards', 'lanyards', 'schools', 'staff'],
    sizes: ['Portrait', 'Landscape'],
    colors: ['Full color'],
    materials: ['PVC Card', 'Branded Lanyard', 'Card Holder'],
    estimate: '3-5 business days',
  },
];

const categories = [
  { name: 'Apparel', items: 'T-shirts, polos, hoodies, jerseys, caps', image: productImages.tshirt, icon: <FaShirt /> },
  { name: 'Promotional Items', items: 'Mugs, pens, gift boxes, keyholders, souvenirs', image: productImages.mug, icon: <FaGift /> },
  { name: 'Business Essentials', items: 'Cards, flyers, brochures, letterheads', image: productImages.cards, icon: <FaBriefcase /> },
  { name: 'Signage', items: 'Flex banners, roll-up banners, posters', image: productImages.banner, icon: <FaLayerGroup /> },
  { name: 'Office Branding', items: 'ID cards, lanyards, notebooks, stationery', image: productImages.cards, icon: <FaIdCard /> },
  { name: 'Branding', items: 'Labels, stickers, packaging, vinyl wraps', image: productImages.laptop, icon: <FaPalette /> },
];

const services = [
  'Premium materials',
  'Sharp print quality',
  'Professional finishing',
  'Fast turnaround',
  'Nationwide delivery',
  'Experienced designers',
];

const portfolio = [
  { title: 'Tech Startup Launch Kit', type: 'Corporate branding', image: productImages.cards },
  { title: 'Church Conference Shirts', type: 'Churches', image: productImages.tshirt },
  { title: 'Restaurant Mug Campaign', type: 'Restaurants', image: productImages.mug },
  { title: 'Political Rally Banners', type: 'Campaigns', image: productImages.banner },
  { title: 'School ID System', type: 'Schools', image: productImages.cards },
  { title: 'Fashion Brand Packaging', type: 'Apparel', image: productImages.laptop },
];

const orderSteps = [
  'Order Received',
  'Artwork Review',
  'Design Proof Sent',
  'Customer Approval',
  'Printing',
  'Quality Check',
  'Packaging',
  'Shipped',
  'Delivered',
];

const formatNaira = (value) =>
  new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(value);

function Logo({ onClick }) {
  return (
    <button type="button" className="ph-logo" onClick={onClick} aria-label={`${brand} home`}>
      <img src="/logo.svg" alt="" className="ph-logo-mark" />
    </button>
  );
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="ph-section-title">
      {eyebrow && <span>{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function ProductCard({ product, liked, onLike, onConfigure, onAdd }) {
  return (
    <article className="ph-product-card">
      <button type="button" className={`ph-like ${liked ? 'active' : ''}`} onClick={() => onLike(product)}>
        {liked ? <FaHeart /> : <FaRegHeart />}
      </button>
      <img src={product.image} alt={product.name} />
      <div>
        <small>{product.category}</small>
        <h3>{product.name}</h3>
        <p>{product.subcategory}</p>
        <div className="ph-rating"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><span>4.9</span></div>
        <strong>From {formatNaira(product.price)}</strong>
        <div className="ph-card-actions">
          <button type="button" onClick={() => onConfigure(product)}>Customize</button>
          <button type="button" onClick={() => onAdd(product)}><FaCartShopping /> Add</button>
        </div>
      </div>
    </article>
  );
}

function Configurator({ product, onClose, onAdd }) {
  const [color, setColor] = useState(product?.colors[0] || '');
  const [size, setSize] = useState(product?.sizes[0] || '');
  const [material, setMaterial] = useState(product?.materials[0] || '');
  const [quantity, setQuantity] = useState(25);
  const [text, setText] = useState('Your Logo');
  const [fileName, setFileName] = useState('');

  if (!product) return null;

  const bulkDiscount = quantity >= 100 ? 0.85 : quantity >= 50 ? 0.92 : 1;
  const total = Math.round(product.price * quantity * bulkDiscount);

  return (
    <div className="ph-modal-backdrop" role="dialog" aria-modal="true">
      <button type="button" className="ph-modal-scrim" onClick={onClose} aria-label="Close customizer" />
      <section className="ph-configurator">
        <button type="button" className="ph-close" onClick={onClose} aria-label="Close"><FaXmark /></button>
        <div className="ph-preview">
          <img src={product.image} alt={product.name} />
          <div className="ph-live-mark">
            <span>{text || 'Your Logo'}</span>
            {fileName && <small>{fileName}</small>}
          </div>
        </div>
        <div className="ph-config-panel">
          <span>{product.category}</span>
          <h2>{product.name}</h2>
          <p>{product.description || 'Configure your product, upload artwork, preview your mockup and get an instant price before checkout.'}</p>

          <label>Artwork text<input value={text} onChange={(event) => setText(event.target.value)} /></label>

          <div className="ph-option-grid">
            <label>Color<select value={color} onChange={(event) => setColor(event.target.value)}>{product.colors.map((item) => <option key={item}>{item}</option>)}</select></label>
            <label>Size<select value={size} onChange={(event) => setSize(event.target.value)}>{product.sizes.map((item) => <option key={item}>{item}</option>)}</select></label>
            <label>Material<select value={material} onChange={(event) => setMaterial(event.target.value)}>{product.materials.map((item) => <option key={item}>{item}</option>)}</select></label>
            <label>Quantity<input type="number" min="1" value={quantity} onChange={(event) => setQuantity(Number(event.target.value) || 1)} /></label>
          </div>

          <label className="ph-upload">
            <FaCloudArrowUp />
            <span>{fileName || 'Upload artwork: PNG, PDF, SVG or AI'}</span>
            <input type="file" onChange={(event) => setFileName(event.target.files?.[0]?.name || '')} />
          </label>

          <div className="ph-price-box">
            <div><span>Delivery estimate</span><strong>{product.estimate}</strong></div>
            <div><span>Live price</span><strong>{formatNaira(total)}</strong></div>
          </div>

          <div className="ph-config-actions">
            <button type="button" onClick={() => alert('Design assistance request saved for this demo.')}>Request Design Assistance</button>
            <button type="button" onClick={() => onAdd(product, quantity, { color, size, material, text, fileName, total })}>Add to Cart</button>
          </div>
        </div>
      </section>
    </div>
  );
}

function CartModal({ cart, onClose, onIncrease, onDecrease, onRemove, onCheckout }) {
  const subtotal = cart.reduce((sum, item) => sum + item.total, 0);
  const delivery = subtotal > 250000 || subtotal === 0 ? 0 : 3500;

  return (
    <div className="ph-modal-backdrop" role="dialog" aria-modal="true">
      <button type="button" className="ph-modal-scrim" onClick={onClose} aria-label="Close cart" />
      <aside className="ph-cart">
        <header>
          <div><span>Checkout</span><h2>Your Cart</h2></div>
          <button type="button" onClick={onClose}><FaXmark /></button>
        </header>
        <div className="ph-cart-list">
          {cart.length === 0 ? (
            <div className="ph-empty"><FaBoxOpen /><h3>Your cart is empty</h3><p>Customize a product and add it here to start your print order.</p></div>
          ) : cart.map((item) => (
            <article key={item.key} className="ph-cart-item">
              <img src={item.product.image} alt={item.product.name} />
              <div>
                <h3>{item.product.name}</h3>
                <p>{item.config.color} · {item.config.size} · {item.config.material}</p>
                <strong>{formatNaira(item.total)}</strong>
              </div>
              <div className="ph-qty">
                <button type="button" onClick={() => onDecrease(item.key)}><FaMinus /></button>
                <span>{item.quantity}</span>
                <button type="button" onClick={() => onIncrease(item.key)}><FaPlus /></button>
              </div>
              <button type="button" className="ph-remove" onClick={() => onRemove(item.key)}><FaXmark /></button>
            </article>
          ))}
        </div>
        <footer>
          <div><span>Subtotal</span><strong>{formatNaira(subtotal)}</strong></div>
          <div><span>Delivery</span><strong>{delivery ? formatNaira(delivery) : 'Free'}</strong></div>
          <div><span>Total</span><strong>{formatNaira(subtotal + delivery)}</strong></div>
          <button type="button" disabled={!cart.length} onClick={onCheckout}>Pay Securely with Paystack</button>
        </footer>
      </aside>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState('Home');
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [portfolioFilter, setPortfolioFilter] = useState('All');
  const [liked, setLiked] = useState({});
  const [cart, setCart] = useState([]);
  const [activeProduct, setActiveProduct] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState('');

  const searchSuggestions = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return [];
    return products
      .filter((product) => [product.name, product.subcategory, ...product.tags].some((item) => item.toLowerCase().includes(value)))
      .slice(0, 5);
  }, [query]);

  const visibleProducts = useMemo(() => {
    const value = query.trim().toLowerCase();
    return products.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category;
      const matchesSearch = !value || [product.name, product.category, product.subcategory, ...product.tags].some((item) => item.toLowerCase().includes(value));
      return matchesCategory && matchesSearch;
    });
  }, [category, query]);

  const filteredPortfolio = portfolioFilter === 'All' ? portfolio : portfolio.filter((item) => item.type === portfolioFilter);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const wishlistCount = Object.values(liked).filter(Boolean).length;

  const notify = (message) => {
    setToast(message);
    window.clearTimeout(window.__printHubToast);
    window.__printHubToast = window.setTimeout(() => setToast(''), 2500);
  };

  const navigate = (next) => {
    setPage(next);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addToCart = (product, quantity = 1, config = null) => {
    const resolvedConfig = config || {
      color: product.colors[0],
      size: product.sizes[0],
      material: product.materials[0],
      text: 'Standard artwork',
      fileName: '',
      total: product.price * quantity,
    };
    const key = `${product.id}-${resolvedConfig.color}-${resolvedConfig.size}-${resolvedConfig.material}-${resolvedConfig.text}`;
    setCart((current) => {
      const found = current.find((item) => item.key === key);
      if (found) {
        return current.map((item) => item.key === key ? { ...item, quantity: item.quantity + quantity, total: item.total + resolvedConfig.total } : item);
      }
      return [...current, { key, product, quantity, config: resolvedConfig, total: resolvedConfig.total }];
    });
    notify(`${product.name} added to cart.`);
  };

  const updateCartQuantity = (key, direction) => {
    setCart((current) => current
      .map((item) => {
        if (item.key !== key) return item;
        const unit = item.total / item.quantity;
        const quantity = item.quantity + direction;
        return { ...item, quantity, total: Math.round(unit * quantity) };
      })
      .filter((item) => item.quantity > 0));
  };

  const navItems = ['Home', 'Products', 'Services', 'Corporate Solutions', 'Portfolio', 'Pricing', 'Track Order', 'About', 'Contact'];

  return (
    <div className="ph-app">
      {toast && <div className="ph-toast"><FaCheck />{toast}</div>}

      <header className="ph-header">
        <div className="ph-header-main">
          <Logo onClick={() => navigate('Home')} />
          <div className="ph-search">
            <FaMagnifyingGlass />
            <input value={query} placeholder="Search mugs, shirts, banners..." onChange={(event) => { setQuery(event.target.value); setPage('Products'); }} />
            {searchSuggestions.length > 0 && (
              <div className="ph-suggestions">
                {searchSuggestions.map((item) => (
                  <button key={item.id} type="button" onClick={() => { setActiveProduct(item); setQuery(item.name); }}>
                    <img src={item.image} alt="" />
                    <span>{item.name}</span>
                    <small>{formatNaira(item.price)}</small>
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="ph-actions">
            <button type="button" onClick={() => notify(`${wishlistCount} saved product(s).`)}><FaHeart />{wishlistCount > 0 && <span>{wishlistCount}</span>}</button>
            <button type="button" onClick={() => setCartOpen(true)}><FaCartShopping />{cartCount > 0 && <span>{cartCount}</span>}</button>
            <button type="button" onClick={() => navigate('Account')}><FaUser /><small>Account</small></button>
          </div>
        </div>
        <nav className="ph-nav">
          {navItems.map((item) => <button key={item} type="button" className={page === item ? 'active' : ''} onClick={() => navigate(item)}>{item}</button>)}
        </nav>
      </header>

      <main>
        {page === 'Home' && (
          <>
            <section className="ph-hero">
              <div className="ph-hero-copy">
                <span>Nigeria's premium online print and branding platform</span>
                <h1>Bring Your Brand to Life.</h1>
                <p>Premium printing, branding, promotional merchandise, and design services-all in one place.</p>
                <div>
                  <button type="button" onClick={() => navigate('Products')}>Start Your Order <FaArrowRight /></button>
                  <button type="button" onClick={() => navigate('Products')}>Browse Products</button>
                </div>
                <ul>
                  {['Premium Quality', 'Fast Turnaround', 'Nationwide Delivery', 'Secure Payments'].map((item) => <li key={item}><FaCircleCheck />{item}</li>)}
                </ul>
              </div>
              <div className="ph-hero-mockups">
                <img src={productImages.tshirt} alt="Branded T-shirt" />
                <img src={productImages.mug} alt="Printed mug" />
                <img src={productImages.cards} alt="Business cards" />
                <img src={productImages.banner} alt="Roll-up banner" />
                <img src={productImages.laptop} alt="Laptop branding" />
              </div>
            </section>

            <section className="ph-strip">
              {[ 
                [<FaWhatsapp key="whatsapp" />, 'WhatsApp updates'],
                [<FaPaintbrush key="paint" />, 'Live customizer'],
                [<FaCreditCard key="card" />, 'Paystack payments'],
                [<FaTruckFast key="truck" />, 'Lagos + nationwide delivery'],
              ].map(([icon, label]) => <div key={label}>{icon}<span>{label}</span></div>)}
            </section>

            <section className="ph-section">
              <SectionTitle eyebrow="Shop by category" title="Everything your brand needs to show up professionally." />
              <div className="ph-category-grid">
                {categories.map((item) => (
                  <button key={item.name} type="button" onClick={() => { setCategory(item.name); navigate('Products'); }}>
                    <img src={item.image} alt="" />
                    <span>{item.icon}</span>
                    <h3>{item.name}</h3>
                    <p>{item.items}</p>
                  </button>
                ))}
              </div>
            </section>

            <section className="ph-section">
              <SectionTitle eyebrow="Popular products" title="Start with our most requested print products." />
              <div className="ph-products">
                {products.slice(0, 4).map((product) => (
                  <ProductCard key={product.id} product={product} liked={liked[product.id]} onLike={(item) => setLiked((next) => ({ ...next, [item.id]: !next[item.id] }))} onConfigure={setActiveProduct} onAdd={addToCart} />
                ))}
              </div>
            </section>

            <section className="ph-section ph-split">
              <div>
                <SectionTitle eyebrow="Live product customizer" title="Preview designs before you pay." text="Upload artwork, add text, choose colors, select print positions and see a realistic mockup update instantly." />
                <button type="button" onClick={() => setActiveProduct(products[0])}>Try the Customizer</button>
              </div>
              <div className="ph-design-demo">
                <img src={productImages.tshirt} alt="Product customizer preview" />
                <div><strong>Your Logo</strong><span>Front print · Premium cotton</span></div>
              </div>
            </section>
          </>
        )}

        {page === 'Products' && (
          <section className="ph-section ph-page">
            <SectionTitle eyebrow={`${visibleProducts.length} products`} title="Products" text="Configure products, upload artwork and get instant prices before checkout." />
            <div className="ph-filter-row">
              {['All', ...categories.map((item) => item.name)].map((item) => <button key={item} type="button" className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>{item}</button>)}
            </div>
            <div className="ph-products">
              {visibleProducts.map((product) => (
                <ProductCard key={product.id} product={product} liked={liked[product.id]} onLike={(item) => setLiked((next) => ({ ...next, [item.id]: !next[item.id] }))} onConfigure={setActiveProduct} onAdd={addToCart} />
              ))}
            </div>
          </section>
        )}

        {page === 'Services' && (
          <section className="ph-section ph-page">
            <SectionTitle eyebrow="Design, print, brand" title="Services built for fast-moving Nigerian businesses." />
            <div className="ph-service-grid">
              {services.map((item) => <article key={item}><FaCheck /><h3>{item}</h3><p>Reliable execution, clear updates and premium finishing from artwork review to delivery.</p></article>)}
            </div>
          </section>
        )}

        {page === 'Corporate Solutions' && (
          <section className="ph-section ph-page ph-corporate">
            <SectionTitle eyebrow="For companies and teams" title="Corporate printing without the back-and-forth." text="Bulk discounts, dedicated account managers, recurring orders and approval workflows for SMEs, schools, churches, agencies and large organizations." />
            <div className="ph-corp-grid">
              {['Bulk discounts', 'Custom quotations', 'Dedicated account managers', 'Recurring scheduled orders', 'Company branding packages', 'Multiple delivery locations'].map((item) => <article key={item}><FaBuilding /><h3>{item}</h3></article>)}
            </div>
          </section>
        )}

        {page === 'Portfolio' && (
          <section className="ph-section ph-page">
            <SectionTitle eyebrow="Completed work" title="Portfolio" text="Filter examples by industry and project type." />
            <div className="ph-filter-row">
              {['All', ...new Set(portfolio.map((item) => item.type))].map((item) => <button key={item} type="button" className={portfolioFilter === item ? 'active' : ''} onClick={() => setPortfolioFilter(item)}>{item}</button>)}
            </div>
            <div className="ph-portfolio-grid">
              {filteredPortfolio.map((item) => <article key={item.title}><img src={item.image} alt={item.title} /><span>{item.type}</span><h3>{item.title}</h3></article>)}
            </div>
          </section>
        )}

        {page === 'Pricing' && (
          <section className="ph-section ph-page">
            <SectionTitle eyebrow="Instant estimates" title="Pricing that scales with volume." text="Final pricing depends on size, material, quantity, finishing and delivery location." />
            <div className="ph-pricing-grid">
              {products.slice(0, 3).map((product) => <article key={product.id}><h3>{product.name}</h3><strong>{formatNaira(product.price)}</strong><p>Starting price per unit. Bulk discounts from 50+ units.</p><button type="button" onClick={() => setActiveProduct(product)}>Get Instant Quote</button></article>)}
            </div>
          </section>
        )}

        {page === 'Track Order' && (
          <section className="ph-section ph-page">
            <SectionTitle eyebrow="Transparent workflow" title="Track Order" text="Customers can see exactly where their order is from artwork review to delivery." />
            <div className="ph-track-card">
              <label>Order number<input placeholder="e.g. PH-2407-0188" /></label>
              <button type="button" onClick={() => notify('Demo order loaded.')}>Track Order</button>
            </div>
            <div className="ph-progress">
              {orderSteps.map((step, index) => <div key={step} className={index < 5 ? 'done' : ''}><span>{index + 1}</span><p>{step}</p></div>)}
            </div>
          </section>
        )}

        {page === 'About' && (
          <section className="ph-section ph-page ph-about">
            <SectionTitle eyebrow="Premium, fast, reliable" title="A modern print platform for brands that need to move." text="PrintHub Lagos serves startups, SMEs, churches, schools, corporates, event planners, campaigns, fashion brands and individuals with production-quality print workflows." />
            <div className="ph-service-grid">
              {['Professional', 'Creative', 'Fast', 'Premium', 'Reliable', 'Business-focused'].map((item) => <article key={item}><FaStar /><h3>{item}</h3><p>Every touchpoint is designed to build trust and reduce uncertainty.</p></article>)}
            </div>
          </section>
        )}

        {page === 'Contact' && (
          <section className="ph-section ph-page">
            <SectionTitle eyebrow="Talk to us" title="Contact PrintHub Lagos" text="Request a quote, book design consultation, or ask about bulk/corporate orders." />
            <div className="ph-contact-grid">
              <form onSubmit={(event) => { event.preventDefault(); event.currentTarget.reset(); notify('Quote request submitted.'); }}>
                <input required placeholder="Full name" />
                <input required type="email" placeholder="Email address" />
                <input required placeholder="Phone or WhatsApp number" />
                <select>{categories.map((item) => <option key={item.name}>{item.name}</option>)}</select>
                <textarea required rows="5" placeholder="Tell us what you want to print, quantity, deadline and delivery city." />
                <button type="submit">Submit Quote Request</button>
              </form>
              <aside>
                <p><FaWhatsapp /> WhatsApp: +234 801 234 5678</p>
                <p><FaPhone /> Phone: +234 701 555 0199</p>
                <p><FaEnvelope /> hello@printhublagos.ng</p>
                <p><FaLocationDot /> Lekki Phase 1, Lagos, Nigeria</p>
              </aside>
            </div>
          </section>
        )}

        {page === 'Account' && (
          <section className="ph-section ph-page">
            <SectionTitle eyebrow="Customer dashboard" title="Manage orders, proofs, invoices and saved artwork." />
            <div className="ph-dashboard-grid">
              {[
                [<FaTruckFast key="track" />, 'Track orders'],
                [<FaRotateRight key="reorder" />, 'Reorder previous jobs'],
                [<FaFileInvoice key="invoice" />, 'Download invoices'],
                [<FaCloudArrowUp key="artwork" />, 'Saved artwork'],
                [<FaBell key="proofs" />, 'Proofs awaiting approval'],
                [<FaCalendarCheck key="bookings" />, 'Consultation bookings'],
              ].map(([icon, label]) => <article key={label}>{icon}<h3>{label}</h3></article>)}
            </div>
          </section>
        )}
      </main>

      <footer className="ph-footer">
        <div>
          <Logo onClick={() => navigate('Home')} />
          <p>Premium online printing, branding, promotional merchandise and design services for Nigeria.</p>
        </div>
        <div>
          <h3>Platform</h3>
          {navItems.slice(1, 6).map((item) => <button key={item} type="button" onClick={() => navigate(item)}>{item}</button>)}
        </div>
        <div>
          <h3>Modern extras</h3>
          <p>AI recommendations</p><p>Instant quotes</p><p>WhatsApp updates</p><p>Saved templates</p>
        </div>
        <div>
          <h3>Payments</h3>
          <p>Paystack, cards, transfers and secure checkout.</p>
        </div>
      </footer>

      <nav className="ph-mobile-nav">
        {[
          ['Home', <FaHouse key="home" />],
          ['Products', <FaLayerGroup key="products" />],
          ['Design', <FaPaintbrush key="design" />],
          ['Cart', <FaCartShopping key="cart" />],
          ['Account', <FaUser key="account" />],
        ].map(([label, icon]) => (
          <button key={label} type="button" className={(label === 'Cart' && cartOpen) || page === label ? 'active' : ''} onClick={() => label === 'Cart' ? setCartOpen(true) : label === 'Design' ? setActiveProduct(products[0]) : navigate(label)}>
            {icon}<span>{label}</span>{label === 'Cart' && cartCount > 0 && <strong>{cartCount}</strong>}
          </button>
        ))}
      </nav>

      <Configurator product={activeProduct} onClose={() => setActiveProduct(null)} onAdd={(product, quantity, config) => { addToCart(product, quantity, config); setActiveProduct(null); setCartOpen(true); }} />
      {cartOpen && <CartModal cart={cart} onClose={() => setCartOpen(false)} onIncrease={(key) => updateCartQuantity(key, 1)} onDecrease={(key) => updateCartQuantity(key, -1)} onRemove={(key) => setCart((current) => current.filter((item) => item.key !== key))} onCheckout={() => { setCart([]); setCartOpen(false); notify('Payment initialized. Order received.'); }} />}
    </div>
  );
}
