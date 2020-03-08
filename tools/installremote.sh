#!/bin/bash -e

GSEDEV_REMOTE_RESTART=${GSEDEV_REMOTE_RESTART:-true}
git ls-files | tar Tc - |
  ssh -v $GSEDEV_REMOTE_SSH_OPTS "
    mkdir -p /tmp/gsext/ && \
      tar x -C/tmp/gsext/ && \
      cd /tmp/gsext && \
      make SKIP_GSELIB=1 install &&
      $GSEDEV_REMOTE_RESTART && make restart"
