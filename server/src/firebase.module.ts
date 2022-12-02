import { Module } from '@nestjs/common';
import { cert, initializeApp, ServiceAccount } from 'firebase-admin/app';

@Module({})
export class FirebaseModule {
  constructor() {
    const adminConfig: ServiceAccount = {
      projectId: process.env.FIREBASE_PROJECT_ID,
      privateKey: process.env.FIREBASE_PRIVATE_KEY,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    };
    initializeApp({
      credential: cert(adminConfig),
    });
  }
}
