import React from 'react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="admin container flex">
            <div className="nav-side">nav</div>
            <div className="main-view">
                <div>admin layout</div>
                {children}
            </div>
        </div>
    )
}
