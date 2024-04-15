"use client";

import { useRouter } from "next/navigation";

function NotFoundPage() {
  const router = useRouter();

  // Redirecionar para "/pt" ao acessar a página de não encontrada
  router.push("/pt");

  // A página de não encontrada não precisa de conteúdo, pois será redirecionada
  return null;
}

export default NotFoundPage;
