import Header from '../../src/components/Header';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="app-wrapper">
      <Header />
      <main>
        {children}
      </main>
    </div>
  );
}
