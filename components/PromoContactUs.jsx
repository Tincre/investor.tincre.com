export default function PromoContactUs({}) {
  return (
    <div>
      {" "}
      Contact us for your free{" "}
      <a className="hover:underline font-bold" href="#stats">
        <span className="italic hover:text-indigo-800 transition duration-300">
          <a
            href=" mailto:hi@tincre.com?subject=Interested%20in%20a%20Tincre%20Promo%20integration&body=Hi%20%F0%9F%91%8B%0D%0A%0D%0AI'm%20interested%20in%20a%20Tincre%20Promo%20integration.%20I%20clicked%20this%20link%20on%20https%3A%2F%2Finvestor.tincre.com%20and%20would%20like%20to%20learn%20more.%0D%0A%0D%0AThank%20you!%0D%0A%0D%0A"
            target="_blank"
            rel="noopener"
          >
            Promo integration
          </a>
        </span>
      </a>
      .
    </div>
  );
}
