---
title: on signature schemes
date: 2021-05-20T08:09
desc: notes on signature schemes
tags:
  - security
---

### Field guide to signature schemes

triple of three algorithms G S V

## Generator

`G() -> (pk, sk)`

* creates public key and secret key

## Signer

`S(sk, x) -> t`

* takes secret key and value to be signed
* returns a tag, a random string that allows verification againist x

## Verifier

`V(pk,x,t) -> accept|reject`

* takes public key, value, and signed value
* accepts or rejects based on x and t

## Correctness

`V(pk, x, S(sk, x))`

the result of the signer with arguments secret key and value will verify with verification function with arguments public key, value, and result of signer.

## Security

`V(pk, x, t)`

this will be next to impossible, computationally difficult

## Typical flow

* server calls generator `G() -> (pk, sk)`
* client logs in
* server validates log credientials
* server returns tag `S(sk, x) -> t`
* on next private request from client server validates `V(pk, x, S(sk, x))`
* if valid returns private response

